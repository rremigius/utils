(function() {
	var _ = require('lodash');
	var String = require('./string');
	var Err = require('./error').Error;
	var Log = require('./log');

	var Validation = {};

	Validation.Validity = function (name, input, valid, message) {
		if(arguments.length === 1 && _.isObject(name)) {
			var settings = name;
			this.setName(settings.name);
			this.setValid(settings.valid);
			this.setMessage(settings.message);
			this.setInput(settings.input);
			if('corrected' in settings) {
				this.setCorrectedValue(settings.corrected);
			}
			this.setValidityMap(settings.validityMap);
			this.setInfo(settings.info);
			this.setType(settings.type);
		} else {
			this._name = name;
			this._input = input;
			this._valid = valid;
			this._message = message;
		}
	};
	Validation.Validity.prototype._type = 'value';
	Validation.Validity.prototype._name = undefined;
	Validation.Validity.prototype._input = undefined;
	Validation.Validity.prototype._valid = true;
	Validation.Validity.prototype._validityMap = undefined;
	Validation.Validity.prototype._corrected = undefined;
	Validation.Validity.prototype._isCorrected = false;
	Validation.Validity.prototype._info = undefined;

	Validation.Validity.prototype.getErrorRoots = function() {
		if(this.isValid()) return {};

		var map = this.getValidityMap();
		var roots = {};
		if(!_.isObject(map)) {
			roots = this.createError();
		} else {
			for(var i in map) {
				var sub = map[i].getErrorRoots();
				if(_.isString(sub)) {
					roots[i] = sub;
				} else if (sub instanceof Err) {
					roots[i] = sub;
				} else {
					for(var j in sub) {
						roots[[i,j].join('.')] = sub[j];
					}
				}
			}
		}
		return roots;
	};

	Validation.Validity.prototype.setType = function(type) {
		this._type = type;
	};
	Validation.Validity.prototype.getType = function() {
		return this._type;
	};
	Validation.Validity.prototype.setName = function(name) {
		this._name = name;
	};
	Validation.Validity.prototype.getName = function() {
		return this._name;
	};
	Validation.Validity.prototype.setInfo = function(info) {
		this._info = info;
	};
	Validation.Validity.prototype.getInfo = function() {
		return this._info;
	};
	Validation.Validity.prototype.getInput = function() {
		return this._input;
	};
	Validation.Validity.prototype.setInput = function(input) {
		this._input = input;
	};
	Validation.Validity.prototype.setValid = function(valid) {
		this._valid = valid !== false;
	};
	Validation.Validity.prototype.isValid = function() { return this._valid; };
	Validation.Validity.prototype.getValue = function() {
		if(!this.isValid()) return undefined;
		if(this._isCorrected) return this._corrected;

		var value = this._input;
		if(_.isObject(this._validityMap)) {
			for(var i in this._validityMap) {
				value[i] = this._validityMap[i].getValue();
			}
		}

		return value;
	};
	Validation.Validity.prototype.setMessage = function(message) {
		this._message = message;
	};
	Validation.Validity.prototype.getMessage = function() { return this._message; };
	Validation.Validity.prototype.isCorrected = function () {
		return this._isCorrected;
	};
	Validation.Validity.prototype.getCorrectedValue = function() {
		return this._corrected;
	};
	Validation.Validity.prototype.setCorrectedValue = function(value) {
		this._isCorrected = true;
		this._corrected = value;
	};
	Validation.Validity.prototype.getValidityMap = function() {
		return this._validityMap;
	};
	Validation.Validity.prototype.setValidityMap = function(map) {
		this._validityMap = map;
	};
	Validation.Validity.prototype.createBadValueMessage = function(returnAsArray) {
		var why = this.getMessage();
		if(why === undefined) {
			return undefined;
		}

		var defaultTo = this.getCorrectedValue();
		var value = this.getInput();
		if(!returnAsArray) {
			value = String.valueToString(value, 30);
		}

		// If reason does not end with full stop, add one.
		if(!/\.\s*?/.exec(why)) {
			why += '.';
		}

		var messages = [];
		messages.push(why);
		messages.push("Value: ");
		messages.push(value);
		if(this.isValid() && this.isCorrected()) {
			messages.push(". Using default:");
			messages.push(String.valueToString(defaultTo));
		}

		if(returnAsArray === true) {
			return messages;
		} else {
			return messages.join(' ');
		}
	};

	/**
	 * Creates an Err object.
	 * @param {boolean} [includeErrMap]
	 * @returns {Err}
	 */
	Validation.Validity.prototype.createError = function(includeErrMap) {
		var message = this.getMessage();
		if(message === undefined) {
			return null;
		}

		var code = 'validation-' + this.getType();
		var error = new Err({
			data	: this.getInput(),
			message	: this.createBadValueMessage(),
			code	: code
		});
		if(includeErrMap !== false) {
			var validityMap = this.getValidityMap();
			if(_.isObject(validityMap)) {
				error.errorMap = this.getErrorRoots();
			}
		}

		return error;
	};

	Validation._validationMethods = {};

	Validation.setValidationMethod = function(name, func, message) {
		if(!_.isFunction(func)) {
			Log.error("Function given for validation method '" + name + "' is not a function.");
			return false;
		}

		Validation._validationMethods[name] = {
			func: func,
			message: message
		};
	};

	/**
	 *
	 * @param {Validation.Validity} validity
	 * @param {object} [logger]		[Optional] A Logging object with 'warn' and 'error' methods.
	 * @returns {boolean}   Whether or not the validity was logged.
	 */
	Validation.logValidity = function(validity, logger = null) {
		if(logger === null) logger = Log;

		if(!(validity instanceof Validation.Validity)) {
			logger.error("Could not log validity.", validity);
			return false;
		}

		if(validity.isValid() && validity.getMessage() === undefined) {
			return false;
		}

		var error = validity.createError();
		var showError = undefined;
		if(Validation.def(error.originalError)) {
			showError = error.originalError;
		} else if (Validation.def(error.errorMap)) {
			showError = error.errorMap;
		}

		var message = validity.createBadValueMessage(true);
		if(showError !== undefined) {
			message.push(". Error: ");
			message.push(showError);
		}
		if(!validity.isValid()) {
			logger.error.apply(logger, message);
		} else if (validity.isCorrected()) {
			logger.warn.apply(logger, message);
		}

		return true;
	};

	Validation.getValidationMethod = function(method) {
		if(!_.isString(method)) return undefined;
		return _.get(Validation._validationMethods[method], 'func');
	};

	Validation.getValidationMessage = function(method) {
		if(!_.isString(method)) return undefined;
		return _.get(Validation._validationMethods[method], 'message');
	};

	/**
	 *
	 * Validates a value, based on the given parameters
	 *
	 * Example usage: Validation.validateOne("myVariable", "apple", "isString", "Must be a string", {default: "banana", warn: false});
	 *
	 * @param {string} name					 The name of the variable to check.
	 * @param value							 The value of the variable to check.
	 * @param method	 Boolean check for validity, or name of util for validation.
	 * @param {string} [message]				[Optional] The message to display when variable is not valid.
	 * @param {object} options				  An object of extra option.
	 * @param [options.default]				 A default value if given value is invalid. If not provided, validation will fail if invalid value.
	 * @param {boolean} [options.warn]		  If false, no warning will be given if default is chosen. Defaults to true.
	 *
	 * @return {Validation.Validity}
	 */
	Validation.validateOne = function(name, value, method, message, options) {
		/** @type {Validation.Validity|boolean} */
		var valid = undefined;
		if(_.isPlainObject(message)) { // message was omitted
			options = message;
			message = undefined;
		}

		// Get method from utils, if method is string
		if(_.isString(method)) {
			// Get function from utils
			var utilMethod = Validation.getValidationMethod(method);

			// If no message is provided, try to find one from validationMessages
			if (!_.isString(message)) {
				message = Validation.getValidationMessage(method);
				if(message === undefined) {
					message = "Must be " + method + ".";
				}
			}
			if(!_.isFunction(utilMethod)) {
				message = "Don't know how to validate '"+method+"'";
				method = new Validation.Validity(name, value, false, message);
			} else {
				method = utilMethod;
			}
		}

		// Apply validation method
		if(_.isFunction(method)) {
			valid = method.apply(Validation, [value]);
		// Validity object
		} else if (method instanceof Validation.Validity) {
			valid = method;
		// validateArray
		} else if (_.isArray(method)) {
			valid = Validation.validateArray(name, value, method, undefined, _.get(options, 'array'));
		// validateObject
		} else if (_.isObject(method)) {
			valid = Validation.validateObject(name, value, method, undefined, options);
		// Boolean validation
		} else {
			valid = method === true;
		}

		if(!(valid instanceof Validation.Validity)) {
			valid = new Validation.Validity(name, value, valid);
		}

		// Feedback
		var __setMessage = function(valid, message) {
			if(_.isFunction(message)) {
				message = message(value);
			}
			valid.setMessage(message);
		};

		if(!valid.isValid()) {
			if(message === undefined) {
				message = 'Invalid.';
			}
			if(_.isObject(options) && 'default' in options) {
				if(_.isFunction(options.default)) {
					var def = options.default.apply(Validation, [value]);
					valid.setCorrectedValue(def);
				} else {
					valid.setCorrectedValue(options.default);
				}

				var warn = _.get(options, 'warn');
				var __warn = _.isFunction(warn) ? warn : function() { return warn !== false; };
				if(__warn(value) !== false) {
					if(valid.getMessage() === undefined) {
						__setMessage(valid, message);
					}
				} else {
					__setMessage(valid, undefined);
				}
				valid.setValid(true);
			} else {
				valid.setValid(false);
				if(valid.getMessage() === undefined) {
					__setMessage(valid, message);
				}
			}
		} else if(!valid.isCorrected()) {
			__setMessage(valid, undefined);
		}

		return valid;
	};

	Validation.isLogger = function(obj) {
		if(!_.isObject(obj)) return false;
		return _.isFunction(obj.log) &&
			_.isFunction(obj.error) &&
			_.isFunction(obj.warn) &&
			_.isFunction(obj.info);
	};

	/**
	 * Validates a set of values, based on the given parameters.
	 *
	 * Example usage: Validation.validate("myValidation", {a: ["apple", "isString"]}, "Validation failed.");
	 *
	 * @param {string} name			 The name by which to identify this validation.
	 * @param {object} checks		   An object of checks. Where the keys are the names of the variables and the
	 *								  values arrays of parameters that are passed to {@link Validation.validateOne}, prepended by
	 *								  <me> and <checks>.
	 * @param {string} [consequence]	[optional] A message to be given if validation fails.
	 * @param {function} [callback]	 [optional] Callback instead of direct error messages. Callback is called with a Validity object as argument.
	 *
	 * @returns {Validation.Validity}		If validation was passed, an object will be returned containing a the keys
	 *								  of the given checks object, with their validated values.
	 *								  If any of the validations failed, FALSE will be returned.
	 */
	Validation.validate = function(name, checks, consequence, callback) {
		var defaultValidationName = 'Validation';

		// Can also be called without a name
		if(_.isObject(name)) {
			callback = consequence;
			consequence = checks;
			checks = name;
			name = defaultValidationName;
		}

		var validityMap = {};
		var inputMap = {};
		if(Validation.isLogger(callback)) {
			(function(logger) {
				callback = function(validity) {
					return Validation.logValidity(validity, logger);
				};
			})(callback);
		} else {
			callback = Validation.ensure(callback, _.isFunction, callback === false ? function(){} : Validation.logValidity);
		}

		if(consequence === undefined) {
			consequence = '';
		}

		if(_.isObject(checks)) {
			for(var i in checks) {
				checks[i].unshift(i);
				validityMap[i] = Validation.validateOne.apply(Validation, checks[i]);
				inputMap[i] = checks[i][1];
			}
		} else {
			var invalidChecksMessage = "Parameter 'checks' must be object. " + consequence;
			callback(new Validation.Validity(name, checks, invalidChecksMessage));
			return false;
		}

		// Go through results
		var isValid = true;
		for(var i in validityMap) {
			var validity = validityMap[i];
			if (!validity.isValid()) {
				isValid = false;
			}
		}

		// Create Validity object
		var valid = new Validation.Validity({
			type: 'multiple',
			name: name,
			input: inputMap,
			valid: isValid,
			validityMap: validityMap
		});
		if(!isValid) {
			var msg = '';
			if(name === defaultValidationName) {
				msg += "Validation failed.";
			} else {
				msg += "Validation failed for '" + name + "'.";
			}
			msg += ' ' + consequence;
			valid.setMessage(msg);
		}
		callback(valid);
		return valid;
	};

	/**
	 * Validates an object, the same way .validate validates isolated values.
	 *
	 * Example usage: Validation.validateObject('myObject', {a: 'apple'}, {a: ['isString']}).
	 *
	 * @param {string} name			 	The name of the validation.
	 * @param {object} obj			  	The object to check.
	 * @param {object} checks		   	An object with for each key to check an array of arguments [method, message, options]
	 *								  	to pass to the validateOne function.
	 * @param {string} [message]		Message to add to ValidityObject in case of invalid object.
	 * @param {string} [options]		Options for validatObject.
	 * @param {function} [callback]	 	A function that takes a Validity object as argument.
	 *
	 * @return {Validation.Validity}
	 */
	Validation.validateObject = function(name, obj, checks, message, options, callback) {
		if(_.isObject(name)) {
			callback = message;
			message = checks;
			checks = obj;
			obj = name;
			name = 'Object';
		}
		if(_.isObject(message)) {
			callback = options;
			options = message;
		};
		if(_.isFunction(options)) {
			callback = options;
		}
		callback = Validation.ensure(callback, _.isFunction, function() {});

		if(!_.isObject(checks)) {
			var invalid = new Validation.Validity(name, checks, false, "Invalid 'checks' parameter. Must be object.");
			callback(invalid);
			return invalid;
		}

		if(!_.isObject(obj)) {
			var invalid = new Validation.Validity(name, checks, false, "Invalid object.");
			callback(invalid);
			return invalid;
		}

		var validityMap = {};
		for(var prop in checks) {
			// For optional properties that are not in the object, skip validation.
			if(_.get(options, 'optionalProperties') === true && !(prop in obj)) {
				continue;
			}

			var args = _.clone(checks[prop]);
			var isArray = _.isArray(args);

			// Lazy, single-parameter validation (string, boolean or function)
			if(_.isString(args) || _.isBoolean(args) || _.isFunction(args)) {
				args = [args];
			// Invalid validation
			} else if (!isArray) {
				args = [false, "Invalid validation definition."]
			}

			args.unshift(obj[prop]);
			args.unshift(prop);

			validityMap[prop] = Validation.validateOne.apply(Validation, args);
		}

		var __setMessage = function(valid, message) {
			if(_.isFunction(message)) {
				message = message(obj);
			}
			valid.setMessage(message);
		};

		var valid = new Validation.Validity({
			name: name,
			input: obj,
			validityMap: validityMap
		});
		var corrected = undefined;
		if(message === undefined) {
			message = "Invalid object for '" + name + "'.";
		}
		var hasMessage = false;
		for(var prop in validityMap) {
			if(!validityMap[prop].isValid()) {
				valid.setValid(false);
				__setMessage(valid, message);
			}
			if(validityMap[prop].isCorrected()) {
				if(corrected === undefined) {
					corrected = _.clone(obj);
					valid.setCorrectedValue(corrected);
				}
				corrected[prop] = validityMap[prop].getValue();
			}
			if(validityMap[prop].getMessage() !== undefined) {
				hasMessage = true;
			}
		}
		if(hasMessage) {
			__setMessage(valid, message);
		}
		valid.setType('object');

		callback(valid);
		return valid;
	};

	/**
	 * Validates an array of values, using the given validation function.
	 *
	 * Example usage: Validation.validateArray("myArray", ['apple', 'banana', 123], ["isString", {default: 'fruit'}]);
	 *
	 * @param {string} name
	 * @param {Array} array				 					The array to validate.
	 * @param {Array|string|function} itemValidation		The validation arguments [method, message, options]
	 * @param {number} [options.minLength=0]				[optional] The minimum length of the array.
	 * @param {number} [options.maxLength=Infinity] 		[optional] The maximum length of the array.
	 * @param {string} [options.itemType='Item']			[optional] What to call an item.
	 * @param {function} [callback]		 					[optional] Callback instead of direct error messages. Callback is called with a Validity object as argument.
	 */
	Validation.validateArray = function(name, array, itemValidation, message, options, callback) {
		if(_.isArray(name)) {
			callback = options;
			options = message;
			message = itemValidation;
			itemValidation = array;
			array = name;
			name = 'Array';
		}
		if(_.isPlainObject(message)){
			callback = options;
			options = message;
		}
		var minLength = _.get(options, 'minLength');
		var maxLength = _.get(options, 'maxLength');
		var itemType = _.get(options, 'itemType');

		callback = Validation.ensure(callback, _.isFunction, function() {});

		if(!_.isArray(array)) {
			var invalid = new Validation.Validity({name: name, input: array, valid: false, message: "Must be an array", type: 'array'});
			callback(invalid);
			return invalid;
		}
		if(!_.isArray(itemValidation)) {
			itemValidation = [itemValidation];
		}
		var valid = new Validation.Validity(name, array, true);

		if(!_.isNumber(minLength)) minLength = 0;
		if(!_.isNumber(maxLength)) maxLength = Infinity;
		if(!_.isString(itemType)) itemType = 'Item';

		var itemPlural = String.plural(itemType);

		if(array.length < minLength) {
			var invalid2 = new Validation.Validity({
				name: name,
				input: array,
				valid: false,
				type: 'array',
				message: name + " must contain at least " + minLength + " "+itemPlural.toLowerCase()
			});
			callback(invalid2);
			return invalid2;
		}
		if(array.length > maxLength) {
			var invalid3 = new Validation.Validity({
				name: name,
				input: array,
				valid: false,
				type: 'array',
				message: name + " may contain at most " + maxLength + " "+itemPlural.toLowerCase()
			});
			callback(invalid3);
			return invalid3;
		}

		var item = null,
			itemName = null,
			validationArgs = null,
			validityMap = {};
		for(var i = 0; i < array.length; i++) {
			item = array[i];
			itemName = _.isString(item) ? item : i;

			validationArgs = _.clone(itemValidation);
			validationArgs.unshift(item);
			validationArgs.unshift(itemName);
			if(Validation.def(message)) {
				validationArgs.push(message);
			}

			validityMap[i] = Validation.validateOne.apply(Validation, validationArgs);
		}

		var corrected = undefined;
		var invalidMessage = "Invalid " + itemPlural.toLowerCase() + " in " + name + " array.";
		var hasMessage = false;
		for(var i in validityMap) {
			if(!validityMap[i].isValid()) {
				valid.setValid(false);
				valid.setMessage(invalidMessage);
			}
			if(validityMap[i].isCorrected()) {
				if(corrected === undefined) {
					corrected = _.clone(array);
					valid.setCorrectedValue(corrected);
				}
				corrected[i] = validityMap[i].getValue();
			}
			if(validityMap[i].getMessage() !== undefined) {
				hasMessage = true;
			}
		}
		if(hasMessage) {
			valid.setMessage(invalidMessage);
		}

		valid.setValidityMap(validityMap);
		valid.setType('array');

		callback(valid);
		return valid;
	};

	/**
	 * Checks whether the given argument is an instance of the given class.
	 * @param {function} checkClass	 The class the second argument should be an instance of.
	 * @param {object} [arg]			The argument to check. If not provided, the function will return a function
	 *								  that requires a single argument to check if that is an instance of the given class.
	 * @returns {*}
	 */
	Validation.instanceof = function(checkClass, arg) {
		if(arguments.length < 2) {
			return function(futureArg) {
				return Validation.instanceof(checkClass, futureArg);
			}
		} else {
			return _.isObject(checkClass) && arg instanceof checkClass;
		}
	};

	/**
	 * Checks whether the given argument is defined, and not null.
	 * @param v
	 * @returns {boolean}
	 */
	Validation.def = function (v) {
		return ((v !== null) && (v !== undefined));
	};

	Validation.ensure = function (variable, evalFunc, defaultValue, message) {
		var sure = variable;
		if (!evalFunc(variable)) {
			sure = defaultValue;
			if (Validation.def(message)) {
				Log.error("Validation::ensure", message, variable);
			}
		}

		return sure;
	};

	Validation.ensurePath = function(variable, path, evalFunc, defaultValue, message) {
		if(!_.isObject(variable)) {
			variable = {};
		}
		if(_.isArray(path)) {
			_.forEach(path, function(p) {
				variable = Validation.ensurePath(variable, p, evalFunc, defaultValue, p + ": " + message);
			});
			return variable;
		}

		var check = _.get(variable, path);
		if (!evalFunc(check)) {
			_.set(variable, path, defaultValue);
			if (Validation.def(message)) {
				Validation.Log.error(message, variable);
			}
		}

		return variable;
	};

	Validation.isStringOrNumber = function(variable) {
		return !isNaN(parseFloat(variable)) || _.isString(variable);
	};

	_.forEach({
		isArguments: "Must be arguments.",
		isArray: "Must be array.",
		isBoolean: "Must be boolean.",
		isDate: "Must be date.",
		isElement: "Must be element.",
		isEmpty: "Must be empty.",
		isError: "Must be error.",
		isFinite: "Must be finite.",
		isFunction: "Must be function.",
		isMatch: "Must be match",
		isNaN: "Must be NaN.",
		isNative: "Must be native.",
		isNull: "Must be null.",
		isNumber: "Must be number.",
		isObject: "Must be object.",
		isPlainObject: "Must be plain object.",
		isRegExp: "Must be RegExp.",
		isString: "Must be string.",
		isTypedArray: "Must be typed array.",
		isUndefined: "Must be undefined."
	}, function(message, key) {
		// Lodash validation methods
		Validation.setValidationMethod(key, _[key], message);
	});
	_.forEach({
		// Utils validation methods
		isStringOrNumber: "Must be string or number."
	}, function(message, key) {
		Validation.setValidationMethod(key, Validation[key], message);
	});

	module.exports = Validation;
})();
