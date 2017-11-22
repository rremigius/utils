(function() {
	var _ = require('lodash');
	var Log = require('./log');

	/**
	 * @param {object|string} specs			 Error message or specs.
	 * @param {Error} [originalError]	 Original error message (only if first argument was string).
	 * @constructor
	 */
	Error = function(specs, originalError) {
		if(_.isString(specs)) {
			specs = {
				message: specs
			};
			if(originalError instanceof Error) {
				specs.originalError = originalError;
			}
		}
		specs = specs || {};

		this.message		= specs.message;
		this.originalError  = specs.originalError;
		this.errorMap	   = specs.errorMap;
		this.code		   = specs.code;
		this.data		   = specs.data;
		this.public			= specs.public || true;
	};

	Error.prototype.log = Log;

	Error.prototype.message = 'An error occurred.';
	Error.prototype.originalError = undefined;
	Error.prototype.errorMap = undefined;
	Error.prototype.code = undefined;
	Error.prototype.data = undefined;
	Error.prototype.origin = undefined;
	Error.prototype.stack = undefined;

	Error.prototype.toString = function() {
		return this.message;
	};
	Error.prototype.getMessage = function() {
		return this.message;
	};

	module.exports = Error;
})();
