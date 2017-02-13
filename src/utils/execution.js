(function() {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	var Utils = isNode ? require('../utils-core').Utils : window.Utils;
	if (!Utils) {
		console.error("UtilsCore not loaded.");
		return false;
	}

	var Execution = {};

	Execution.Deferred = function() {

	};

	/**
	 * Waits for all deferred and resolves with an object of their results.
	 * @param {object} deferredMap   Object of Deferred objects.
	 * @param {int} [timeout]		Maximum time to wait before throwing a timeout error.
	 * @returns {$.Deferred}	Will contain either a map of results, or an Prologram.Error object.
	 */
	Execution.waitForAll = function(deferredMap, timeout) {
		var deferred = new $.Deferred();
		var valid = Prologram.Utils.validate({
			deferredMap  : [deferredMap, 'isObject'],
			timeout	  : [timeout, 'isNumber', {default: 60000, warn: Prologram.Utils.def(timeout)}]
		});
		if(!valid) {
			deferred.reject(new Prologram.Error({message: "Could not wait for deferred. Invalid arguments.", data: {}, errorMap: {}}));
			return deferred.promise();
		}
		if(_.isArray(valid.deferredMap)) {
			var newObj = {};
			valid.deferredMap.forEach(function(item, i) {
				newObj[i] = item;
			});
			valid.deferredMap = newObj;
		}
		if(Object.keys(valid.deferredMap).length === 0) {
			deferred.resolve({});
			return deferred.promise();
		}

		var timedOut = false;
		var state = {};
		var results = {};
		var errors = {};

		var _timeout = setTimeout(function() {
			timedOut = true;
			for(var i in state) {
				if(state[i].status === 'pending') {
					errors[i] = new Prologram.Error("Timed out.");
				}
			}
			deferred.reject(new Prologram.Error({
				code: 'timeout',
				message: "Timeout during async operations.",
				data: results,
				errorMap: errors
			}));
		}, valid.timeout);

		var __checkState = function() {
			var done = true;
			for(var i in state) {
				if(state[i].status === 'pending') {
					done = false;
					break;
				}
			}
			if(done) {
				clearTimeout(_timeout);
				if(Object.keys(errors).length > 0) {
					deferred.reject(new Prologram.Error({message: "Error(s) occurred during async operations.", errorMap: errors, data: results}));
				} else {
					deferred.resolve(results)
				}
			}
		};

		Object.keys(valid.deferredMap).forEach(function(i) { // this is necessary for callbacks with i
			if(!Prologram.Utils.isPromise(valid.deferredMap[i])) {
				state[i] = {
					status: 'rejected',
					data: new Prologram.Error("Not a promise.")
				};
				errors[i] = state[i].data
			}
			state[i] = {
				status: 'pending',
				data: undefined
			};
			valid.deferredMap[i].done(function(result) {
				if(!timedOut) {
					state[i].status = 'resolved';
					state[i].data = result;
					results[i] = state[i].data;
					__checkState();
				}
			});
			valid.deferredMap[i].fail(function(result) {
				if(!timedOut) {
					state[i].status = 'rejected';
					state[i].data = result;
					errors[i] = state[i].data;
					__checkState();
				}
			});
		});

		return deferred.promise();
	};

	modules.export.Execution = Execution;
})();