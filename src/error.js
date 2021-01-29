'use strict';

const {isObject, forEach, isNumber, isString, isNil, isPlainObject, keys, set} = require('lodash');
const StackTrace = require('stacktrace-js');

function getCause(originalError, errorMap) {
	if (originalError) {
		return originalError.cause || originalError.message;
	}
	const errorKeys = keys(errorMap);
	if (isPlainObject(errorMap) && errorKeys.length > 0) {
		const error = errorMap[errorKeys[0]];
		if (error instanceof Error) {
			return error.cause || error.message;
		}
		return error;
	}
}

const Err = function (specs, originalError) {
	if (isString(specs)) {
		specs = {
			message: specs
		};
	}
	if (specs instanceof Error) {
		specs = {
			message: specs.message,
			code: specs.code,
			stack: specs.stack,
			public: specs.public,
			cause: specs.cause,
			originalError: specs.originalError
		}
	}
	specs = specs || {};

	if (originalError instanceof Err) {
		specs.originalError = originalError;
	}
	if (originalError === null) {
		delete specs.originalError;
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
	if (!isNil(specs.originalError) || isPlainObject(specs.errorMap)) {
		// Keeps record of the deepest cause
		this.cause = getCause(specs.originalError, specs.errorMap);
	}
	if (!isNil(specs.code)) {
		this.code = specs.code;
	}
	if (!isNil(specs.data)) {
		this.data = specs.data;
	}
	if (!isNil(specs.public)) {
		this.public = specs.public;
	}
	if (isPlainObject(specs.errorMap)) {
		this.errorMap = specs.errorMap;
	}
	if (!isNil(specs.originalError)) {
		if(specs.originalError instanceof Err) {
			this.originalError = specs.originalError;
		} else {
			this.originalError = new Err(specs.originalError);
		}
	}
	if (!isNil(specs.stack)) {
		this.stack = specs.stack;
	} else {
		this.stack = (new Error()).stack;
	}
};

// Static

/**
 * Find deepest stack trace and print it.
 * @param {Error} error
 * @param {Log} [logger] 			Alternative for console
 * @param {string} [rootError]		Will be shown first. Defaults to first argument.
 * @returns {boolean} 	Whether or not the stack trace was printed
 */
Err.printStackTrace = function (error, logger = console, rootError = null) {
	if (!rootError) rootError = error;

	if (error.originalError instanceof Error) {
		return Err.printStackTrace(error.originalError, logger, rootError);
	}
	if (error instanceof Error) {
		StackTrace.fromError(error).then(stack => {
			console.error(error);
			logger.error(rootError, "\nStack trace:\n" + stack.join("\n"));
		});
		return true;
	}
	logger.error(rootError, "(no stack trace).");
	return false;
};

// Inherit
Err.prototype = Object.create(Error.prototype);
Err.prototype.constructor = Error;

// Methods

Err.prototype.toString = function () {
	return this.message;
};

Err.prototype.getMessage = function () {
	return this.message;
};

Err.prototype.getMessageAndCause = function () {
	let str = this.message;
	if (this.cause) {
		str += ' - ' + this.cause;
	}
	return str;
};

Err.prototype.getDeepestError = function () {
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

Err.prototype.getPublicInfo = function() {
	if(this.public !== true) {
		if(!this.originalError) {
			return undefined;
		}
		return this.originalError.getPublicInfo();
	}
	let originalError;
	if(this.originalError instanceof Err) {
		originalError = this.originalError.getPublicInfo();
	}
	const publicError = new Err(this, originalError || null);

	forEach(this.errorMap, (error, key) => {
		if(!(error instanceof Err)) return;
		const publicInfo = error.getPublicInfo();
		if(!publicInfo) return;
		set(publicError, 'errorMap.'+key, publicInfo);
	});
	this.cause = getCause(publicError.originalError, publicError.errorMap);
	return publicError;
};

Err.prototype.export = function () {
	let errorMap = {};
	forEach(this.errorMap, (value, key) => {
		if (value instanceof Err) {
			errorMap[key] = value.export();
			return;
		}
		errorMap[key] = value;
	});
	if (Object.keys(errorMap).length === 0) errorMap = undefined;

	let originalExport = this.originalError instanceof Err ? this.originalError.export() : undefined;
	const exported = {};
	if(!isNil(this.message)) exported.message = this.message;
	if(!isNil(this.code)) exported.code = this.code;
	if(!isNil(this.data)) exported.data = this.data;
	if(!isNil(this.public)) exported.public = this.public;
	if(!isNil(this.cause)) exported.cause = this.cause;
	if(!isNil(errorMap)) exported.errorMap = errorMap;
	if(!isNil(originalExport)) exported.originalError = originalExport;

	return exported;
};

module.exports = Err;
