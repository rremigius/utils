(function() {
	var _ = require('lodash');

	/**
	 * @param {object|string} specs		Error message or specs.
	 * @param {Error} [originalError]	Original error message (only if first argument was string).
	 * @constructor
	 */
	const BetterError = function(specs, originalError) {
		Error.call(this);

		if(_.isString(specs)) {
			specs = {
				message: specs
			};
			if(originalError instanceof BetterError) {
				specs.originalError = originalError;
			}
		}
		specs = specs || {};

		this.message		= specs.message;
		this.originalError  = specs.originalError;
		this.errorMap	   	= specs.errorMap;
		this.code		   	= specs.code;
		this.data		   	= specs.data;
		this.public			= specs.public || true;
	};
	BetterError.prototype = Object.create(Error.prototype);

	BetterError.prototype.message = 'An Error occurred.';
	BetterError.prototype.originalError = undefined;
	BetterError.prototype.errorMap = undefined;
	BetterError.prototype.code = undefined;
	BetterError.prototype.data = undefined;
	BetterError.prototype.stack = undefined;

	BetterError.prototype.toString = function() {
		return this.message;
	};
	BetterError.prototype.getMessage = function() {
		return this.message;
	};

	BetterError.prototype.getDeepestError = function() {
		if(this.originalError instanceof BetterError) {
			return this.originalError.getDeepestError();
		}
		if(_.isObject(this.errorMap)) {
			let errorKeys = Object.keys(this.errorMap);
			if(_.isObject(this.errorMap) && errorKeys.length > 0) {
				return this.errorMap[errorKeys[0]].getDeepestError();
			}
		}

		return this;
	};

	BetterError.prototype.export = function() {
		let errorMap = {};
		_.forEach(errorMap, (value, key) => {
			if(value instanceof BetterError) {
				errorMap[key] = value.export();
				return;
			}
			errorMap[key] = value;
		});
		let originalExport = this.originalError instanceof BetterError ? this.originalError.export() : undefined;
		return {
			message: this.message,
			code: this.code,
			data: this.data,
			errorMap: errorMap,
			originalError: originalExport
		}
	}

	module.exports.Error = BetterError;
})();
