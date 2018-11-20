var $ = require('jquery');
var _ = require('lodash');
var Validation = require('./validation');
var Err = require('./error');

var Execution = {};

Execution.Deferred = $.Deferred;

/**
 * Tests whether the object is a Promise object (with done and fail methods).
 * @param value
 * @returns {boolean}
 */
Execution.isPromise = function(value) {
  if(!_.isObject(value)) {
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
 * @param value				 Value or promise.
 * @param {function} [failWhen] A function to check whether a value is a considered a failure value.
 *							  Should return TRUE if value should cause promise to be rejected.
 * @return {$.Deferred}	A promise for the result.
 */
Execution.promise = function(value, failWhen) {
  // To check if resulting value should resolve or reject promise
  if(!_.isFunction(failWhen)) {
    failWhen = function(val) { return false; }; // by default, never reject values
  }

  var deferred = new Execution.Deferred();
  if(Execution.isPromise(value)) {
    value.done(function(result) {
      if(failWhen(result)) {
        deferred.reject(result);
      } else {
        deferred.resolve(result);
      }
    });
    value.fail(function(result) {
      deferred.reject(result);
    });
    return value;
  }

  // If failWhen is specified, check value
  if(failWhen(value)) {
    deferred.reject(value);
  } else {
    deferred.resolve(value);
  }
  return deferred.promise();
};

/**
 * Waits for all deferred and resolves with an object of their results.
 * @param {object} deferredMap   Object of Deferred objects.
 * @param {int} [timeout]		Maximum time to wait before throwing a timeout error.
 * @returns {$.Deferred}	Will contain either a map of results, or an Error object.
 */
Execution.waitForAll = function(deferredMap, timeout) {
  var deferred = new Execution.Deferred();
  var check = Validation.validate({
    deferredMap  : [deferredMap, 'isObject'],
    timeout	  : [timeout, 'isNumber', {default: 60000, warn: Validation.def(timeout)}]
  });
  if(!check.isValid()) {
    deferred.reject(new Err({message: "Could not wait for deferred. Invalid arguments.", data: {}, errorMap: {}}));
    return deferred.promise();
  }
  var valid = check.getValue();

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
        errors[i] = new Err("Timed out.");
      }
    }
    deferred.reject(new Err({
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
        deferred.reject(new Err({message: "Error(s) occurred during async operations.", errorMap: errors, data: results}));
      } else {
        deferred.resolve(results)
      }
    }
  };

  Object.keys(valid.deferredMap).forEach(function(i) { // this is necessary for callbacks with i
    if(!Execution.isPromise(valid.deferredMap[i])) {
      state[i] = {
        status: 'rejected',
        data: new Err("Not a promise.")
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

Execution.synchronize = function(steps) {
  var deferred = new Execution.Deferred();

  if(!_.isObject(steps)) {
    deferred.reject(new Err("Steps must be an object or array."));
    return deferred.promise();
  }

  var keys = Object.keys(steps);
  if(keys.length === 0) {
    return deferred.resolve().promise();
  }

  var next = function(i, previousResult) {
    if(i > keys.length -1) {
      deferred.resolve();
      return;
    }

    var key = keys[i];
    var step = steps[key];
    if(!_.isFunction(step)) {
      deferred.reject(new Err("Step '" + key + "' is not a function."));
      return;
    }

    Execution.promise(step(previousResult), function(val) { return val instanceof Err; })
      .done(function(result) {
        next(i+1, result)
      })
      .fail(function(err) {
        deferred.reject(err);
      });
  };

  next(0);

  return deferred.promise();
};

module.exports = Execution;
