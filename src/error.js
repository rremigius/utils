'use strict';

const {isObject, forEach, isNumber, isString, isNil, isPlainObject, keys} = require('lodash');

function getCause(originalError, errorMap) {
	if(originalError) {
		return originalError.cause || originalError.message;
	}
	const errorKeys = keys(errorMap);
	if(isPlainObject(errorMap) && errorKeys.length > 0) {
		const error = errorMap[errorKeys[0]];
		if(error instanceof Error) {
			return error.cause || error.message;
		}
		return error;
	}
}

const Err = function(specs, originalError) {
  if (isString(specs)) {
    specs = {
      message: specs
    };
  }
  if(specs instanceof Error) {
  	specs = {
  		message: specs.message,
			code: specs.code
		}
	}
  specs = specs || {};

  if (originalError instanceof Err) {
    specs.originalError = originalError;
  }
  // Convert native Error to Err
  if (originalError instanceof Error && !(originalError instanceof Err)) {
    specs.originalError = new Err(originalError);
  }
  // Propagate error code
  if (specs.code === undefined && specs.originalError) {
    specs.code = specs.originalError.code;
  }
  // Second argument was the error code
  if (isNumber(originalError) || isString(originalError)) {
    specs.code = originalError;
  }

  Error.call(this, this.message);
  this.message = specs.message || "An error occurred.";
  if(!isNil(specs.originalError) || isPlainObject(specs.errorMap)) {
  	// Keeps record of the deepest cause
  	this.cause = getCause(specs.originalError, specs.errorMap);
	}
  if(!isNil(specs.code)) {
		this.code = specs.code;
	}
  if(!isNil(specs.data)) {
		this.data = specs.data;
	}
  if(!isNil(specs.public)) {
  	this.public = specs.public;
	}
  if(isPlainObject(specs.errorMap)) {
		this.errorMap = specs.errorMap;
	}
  if(!isNil(specs.originalError)) {
		this.originalError = specs.originalError;
	}
};
// Inherit
Err.prototype = Object.create(Error.prototype);
Err.prototype.constructor = Error;

// Methods

Err.prototype.toString = function() {
  return this.message;
};

Err.prototype.getMessage = function() {
  return this.message;
};

Err.prototype.getMessageAndCause = function() {
	let str = this.message;
	if(this.cause) {
		str += ' - ' + this.cause;
	}
	return str;
};

Err.prototype.getDeepestError = function() {
  if (this.originalError instanceof Err) {
    return this.originalError.getDeepestError();
  }
  if (isObject(this.errorMap)) {
    let errorKeys = Object.keys(this.errorMap);
    if (isObject(this.errorMap) && errorKeys.length > 0) {
      return this.errorMap[errorKeys[0]].getDeepestError();
    }
  }

  return this;
};

Err.prototype.export = function() {
  let errorMap = {};
  forEach(errorMap, (value, key) => {
    if (value instanceof Err) {
      errorMap[key] = value.export();
      return;
    }
    errorMap[key] = value;
  });
  if (Object.keys(errorMap).length === 0) errorMap = undefined;

  let originalExport = this.originalError instanceof Err ? this.originalError.export() : undefined;
  return {
    message: this.message,
    code: this.code,
    data: this.data,
    errorMap: errorMap,
    originalError: originalExport
  }
};

module.exports = Err;
