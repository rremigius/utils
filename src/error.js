const { isObject, forEach, isNumber, isString } = require('lodash');

/**
 * @param {object|string} specs		Error message or specs.
 * @param {Error} [originalError|string|number]	Original error message (only if first argument was string).
 * @constructor
 */
class Err extends Error {
    constructor (specs, originalError) {
		super();

		if(isString(specs)) {
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

		this.message		  = specs.message || "An error occurred.";
		this.code		   	  = specs.code;
		this.data		   	  = specs.data;
		this.public		      = specs.public || true;
		this.errorMap	   	  = specs.errorMap;
		this.originalError    = specs.originalError;
	};

    toString() {
      return this.message;
    }

    getMessage() {
      return this.message;
    }

	getDeepestError() {
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
	}

	export() {
		let errorMap = {};
		forEach(errorMap, (value, key) => {
			if(value instanceof Err) {
				errorMap[key] = value.export();
				return;
			}
			errorMap[key] = value;
		});
		if(Object.keys(errorMap).length === 0) errorMap = undefined;
		
		let originalExport = this.originalError instanceof Err ? this.originalError.export() : undefined;
		return {
			message: this.message,
			code: this.code,
			data: this.data,
			errorMap: errorMap,
			originalError: originalExport
		}
	};
}

module.exports = Err;
