const { isObject, forEach, isNumber, isString } = require('lodash');

/**
 * @param {object|string} specs		Error message or specs.
 * @param {Error} [originalError]	Original error message (only if first argument was string).
 * @constructor
 */
const Err = function(specs, originalError) {
  Error.call(this);

  if(_.isString(specs)) {
    specs = {
      message: specs
    };
  }
  specs = specs || {};

  if(originalError instanceof Err) {
      specs.originalError = originalError;
  }
  // Convert native Error to Err
  if(originalError instanceof Error) {
      specs.originalError = new Err(originalError);
  }
  // Propagate error code
  if(specs.code === undefined && specs.originalError) {
	  specs.code = specs.originalError.code;
  }
  // Second argument was the error code
  if(isNumber(originalError) || isString(originalError)) {
    specs.code = originalError;
  }

  this.message		  = specs.message;
  this.originalError  = specs.originalError;
  this.errorMap	   	  = specs.errorMap;
  this.code		   	  = specs.code;
  this.data		   	  = specs.data;
  this.public		  = specs.public || true;
};
Err.prototype = Object.create(Error.prototype);

Err.prototype.message = 'An Error occurred.';
Err.prototype.originalError = undefined;
Err.prototype.errorMap = undefined;
Err.prototype.code = undefined;
Err.prototype.data = undefined;
Err.prototype.stack = undefined;

Err.prototype.toString = function() {
  return this.message;
};
Err.prototype.getMessage = function() {
  return this.message;
};

Err.prototype.getDeepestError = function() {
  if(this.originalError instanceof Err) {
    return this.originalError.getDeepestError();
  }
  if(isObject(this.errorMap)) {
    let errorKeys = Object.keys(this.errorMap);
    if(isObject(this.errorMap) && errorKeys.length > 0) {
      return this.errorMap[errorKeys[0]].getDeepestError();
    }
  }

  return this;
};

Err.prototype.export = function() {
  let errorMap = {};
  forEach(errorMap, (value, key) => {
    if(value instanceof Err) {
      errorMap[key] = value.export();
      return;
    }
    errorMap[key] = value;
  });
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
