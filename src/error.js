'use strict';

const {isObject, forEach, isNumber, isString} = require('lodash');

const Err = function(specs, originalError) {
  if (isString(specs)) {
    specs = {
      message: specs
    };
  }
  specs = specs || {};

  if (originalError instanceof Err) {
    specs.originalError = originalError;
  }
  // Convert native Error to Err
  if (originalError instanceof Error) {
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
  this.code = specs.code;
  this.data = specs.data;
  this.public = specs.public || true;
  this.errorMap = specs.errorMap;
  this.originalError = specs.originalError;

  this.stack = originalError ? originalError.stack : (new Error()).stack;
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
