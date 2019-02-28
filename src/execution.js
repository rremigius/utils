const _ = require('lodash');
const {validate, def} = require('./validation');
const Err = require('./error');

const Execution = {};

/**
 * Tests whether the object is a Promise object (with then and catch methods).
 * @param value
 * @returns {boolean}
 */
Execution.isPromise = function (value) {
	if (!_.isObject(value)) {
		return false;
	}
	if (typeof value.then !== "function") {
		return false;
	}
	if (typeof value.catch !== "function") {
		return false;
	}

	return true;
};
Execution.isDeferred = function (value) {
	if (!_.isObject(value)) {
		return false;
	}
	if (typeof value.done !== "function") {
		return false;
	}
	if (typeof value.fail !== "function") {
		return false;
	}

	return true;
};

/**
 * Handles direct values and promises in the same way. If the given value is a promise, it is handled async.
 * Otherwise, the promise is resolved immediately.
 * @param value                    Value or promise.
 * @param {function} [failWhen] A function to check whether a value is a considered a failure value.
 *                                Should return TRUE if value should cause promise to be rejected.
 * @return {Promise}    A promise for the result. Can also act as a Deferred object.
 */
Execution.promise = function (value, failWhen) {
	if (Execution.isPromise(value)) {
		return value;
	}

	// To check if resulting value should resolve or reject promise
	if (!_.isFunction(failWhen)) {
		failWhen = function (val) {
			return false;
		}; // by default, never reject values
	}

	return new Promise((resolve, reject) => {
		if (Execution.isDeferred(value)) {
			value.done(resolve);
			value.fail(reject);
		}
		// If failWhen is specified, check value
		if (failWhen(value)) {
			reject(value);
		} else {
			resolve(value);
		}
	});
};

/**
 * Waits for all deferred and resolves with an object of their results.
 * @param {object} promises   Object of Deferred objects.
 * @param {int} [timeout]        Maximum time to wait before throwing a timeout error.
 * @returns {Promise}    Will contain either a map of results, or an Error object.
 */
Execution.waitForAll = function (promises, timeout) {
	return new Promise((resolve, reject) => {
		// Validation
		const check = validate({
			promises: [promises, 'isObject'],
			timeout: [timeout, 'isNumber', {default: 60000, warn: def(timeout)}]
		});
		if (!check.isValid()) {
			return reject(new Err({
				message: "Could not wait for deferred. Invalid arguments.",
				data: {},
				errorMap: {}
			}));
		}
		const valid = check.getValue();

		if (_.isArray(valid.promises)) {
			var newObj = {};
			valid.promises.forEach(function (item, i) {
				newObj[i] = item;
			});
			valid.promises = newObj;
		}
		if (Object.keys(valid.promises).length === 0) {
			return resolve({});
		}

		// Set Timeout
		let timedOut = false;
		let state = {};
		let results = _.isArray(promises) ? [] : {};
		let errors = {};
		let _timeout = setTimeout(function () {
			timedOut = true;
			for (let i in state) {
				if (state[i].status === 'pending') {
					errors[i] = new Err("Timed out.");
				}
			}
			reject(new Err({
				code: 'timeout',
				message: "Timeout during async operations.",
				data: results,
				errorMap: errors
			}));
		}, valid.timeout);

		const __checkState = function () {
			let done = true;
			for (let i in state) {
				if (state[i].status === 'pending') {
					done = false;
					break;
				}
			}
			if (done) {
				clearTimeout(_timeout);
				if (Object.keys(errors).length > 0) {
					reject(new Err({
						message: "Error(s) occurred during async operations.",
						errorMap: errors,
						data: results
					}));
				} else {
					resolve(results)
				}
			}
		};

		// Handle promises
		Object.keys(valid.promises).forEach(function (i) { // this is necessary for callbacks with i
			let promise = Execution.promise(valid.promises[i]);
			state[i] = {
				status: 'pending',
				data: undefined
			};
			promise.then(function (result) {
				if (!timedOut) {
					state[i].status = 'resolved';
					state[i].data = result;
					results[i] = state[i].data;
					__checkState();
				}
			});
			promise.catch(function (result) {
				if (!timedOut) {
					state[i].status = 'rejected';
					state[i].data = result;
					errors[i] = state[i].data;
					__checkState();
				}
			});
		});
	});
};

/**
 * Alias for waitForAll
 * @param promises
 * @param timeout
 */
Execution.awaitAll = function (promises, timeout) {
	return Execution.waitForAll(promises, timeout);
};

/**
 * Poll for a given check function to return true.
 * @param {function} check    The check function.
 * @param {number} interval   The interval in milliseconds to check.
 * @param {number} timeout    The number of milliseconds after which to stop polling and reject the promise.
 * @return {Promise}
 */
Execution.poll = function(check, interval, timeout = undefined) {
  return new Promise((resolve, reject) => {
    // Set interval to keep checking
    let intervalID = setInterval(() => {
      if(check()) {
        resolve();
        clearInterval(intervalID);
      }
    }, interval);

    // Clear also after timeout
    if(timeout) {
      setTimeout(() => {
        reject(new Err("Polling timed out."));
        clearInterval(intervalID)
      }, timeout);
    }
  });
};

Execution.synchronize = function (steps) {
	return new Promise((resolve, reject) => {
		const next = function (i, previousResult) {
			if (i > keys.length - 1) {
				resolve(previousResult);
				return;
			}

			let key = keys[i];
			let step = steps[key];
			if (!_.isFunction(step)) {
				reject(new Err("Step '" + key + "' is not a function."));
				return;
			}

			Execution.promise(step(previousResult), function (val) {
				return val instanceof Err;
			}).then(function (result) {
				next(i + 1, result)
			}).catch(function (err) {
				reject(err);
			});
		};

		if (!_.isObject(steps)) {
			return reject(new Err("Steps must be an object or array."));
		}

		let keys = Object.keys(steps);
		if (keys.length === 0) {
			return resolve()
		}

		next(0);
	});
};

module.exports = Execution;
