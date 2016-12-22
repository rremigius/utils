Utils = window.Utils || {};
(function(Utils) {
    if(!Utils.requireUtils(['isObject', 'isArray', 'isString', 'isBoolean', 'isNumber', 'isFunction', 'clone', 'capitaliseFirst', 'plural', 'Error'])) {
        return false;
    }

    Utils.Validity = function (name, input, valid, message) {
        if(arguments.length === 1 && Utils.isObject(name)) {
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
    Utils.Validity.prototype._type = 'value';
    Utils.Validity.prototype._name = undefined;
    Utils.Validity.prototype._input = undefined;
    Utils.Validity.prototype._valid = true;
    Utils.Validity.prototype._validityMap = undefined;
    Utils.Validity.prototype._corrected = undefined;
    Utils.Validity.prototype._isCorrected = false;
    Utils.Validity.prototype._info = undefined;

    Utils.Validity.prototype.setType = function(type) {
        this._type = type;
    };
    Utils.Validity.prototype.getType = function() {
		return this._type;
	}
    Utils.Validity.prototype.setName = function(name) {
        this._name = name;
    };
    Utils.Validity.prototype.getName = function() {
        return this._name;
    };
    Utils.Validity.prototype.setInfo = function(info) {
        this._info = info;
    };
    Utils.Validity.prototype.getInfo = function() {
        return this._info;
    };
    Utils.Validity.prototype.getInput = function() {
        return this._input;
    };
    Utils.Validity.prototype.setInput = function(input) {
        this._input = input;
    };
    Utils.Validity.prototype.setValid = function(valid) {
        this._valid = valid !== false;
    };
    Utils.Validity.prototype.isValid = function() { return this._valid; };
    Utils.Validity.prototype.getValue = function() {
        if(!this.isValid()) return undefined;
        if(this._isCorrected) return this._corrected;
        return this._input;
    };
    Utils.Validity.prototype.setMessage = function(message) {
        this._message = message;
    };
    Utils.Validity.prototype.getMessage = function() { return this._message; };
    Utils.Validity.prototype.isCorrected = function () {
        return this._isCorrected;
    };
    Utils.Validity.prototype.getCorrectedValue = function() {
        return this._corrected;
    };
    Utils.Validity.prototype.setCorrectedValue = function(value) {
        this._isCorrected = true;
        this._corrected = value;
    };
    Utils.Validity.prototype.getValidityMap = function() {
        return this._validityMap;
    };
    Utils.Validity.prototype.setValidityMap = function(map) {
        this._validityMap = map;
    };
    Utils.Validity.prototype.createBadValueMessage = function(returnAsArray) {
        var why = this.getMessage();
        if(why === undefined) {
            return undefined;
        }

        var name = this.getName();
        var defaultTo = this.getCorrectedValue();
        var value = this.getInput();
		if(!returnAsArray) {
			value = Utils.valueToString(value, 30);
		}

        // If reason does not end with full stop, add one.
        if(!/\.\s*?/.exec(why)) {
            why += '.';
        }

        var messages = [];
        messages.push(why);
        messages.push("Given: ");
        messages.push(value);
        if(this.isValid() && this.isCorrected()) {
            messages.push(". Using default:");
            messages.push(Utils.valueToString(defaultTo));
        }

        if(returnAsArray === true) {
            return messages;
        } else {
            return messages.join(' ');
        }
    };

    /**
     * Creates an Error object.
     * @returns {Utils.Error}
     */
    Utils.Validity.prototype.createError = function() {
        var message = this.getMessage();
        if(message === undefined) {
            return null;
        }
        var error = new Utils.Error({
            message: this.createBadValueMessage()
        });
        var validityMap = this.getValidityMap();
        if(_.isObject(validityMap)) {
            var errorMap = {};
            for(var i in validityMap) {
                var subError = validityMap[i].createError();
                if(subError instanceof Utils.Error) {
                    errorMap[i] = subError;
                }
            }
            error.errorMap = errorMap;
        }

        return error;
    };

    Utils._validationMessages = {
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
    };

    /**
     *
     * @param {Utils.Validity} validity
     * @returns {boolean}   Whether or not the validity was logged.
     */
    Utils.LogValidity = function(validity) {
        if(!(validity instanceof Utils.Validity)) {
            Utils.Log.error("Could not log validity.", validity);
            return false;
        }

        if(validity.isValid() && !validity.isCorrected()) {
            return false;
        }

        var error = validity.createError();
        var message = validity.createBadValueMessage(true);
        message.push(". Error: ");
        message.push(error);
        if(!validity.isValid()) {
            Utils.Log.error.apply(Utils.Log, message);
        } else if (validity.isCorrected()) {
            Utils.Log.warn.apply(Utils.Log, message);
        }

        return true;
    };

    Utils.getValidationMessage = function(method) {
        if(typeof(method) !== 'string') {
            return undefined;
        }
        return Utils._validationMessages[method];
    };

    /**
     *
     * Validates a value, based on the given parameters
     *
     * Example usage: Utils.validateOne("myVariable", "apple", "isString", "Must be a string", {default: "banana", warn: false});
     *
     * @param {string} name                     The name of the variable to check.
     * @param value                             The value of the variable to check.
     * @param method     Boolean check for validity, or name of util for validation.
     * @param {string} [message]                [Optional] The message to display when variable is not valid.
     * @param {object} options                  An object of extra option.
     * @param [options.default]                 A default value if given value is invalid. If not provided, validation will fail if invalid value.
     * @param {boolean} [options.warn]          If false, no warning will be given if default is chosen. Defaults to true.
     *
     * @return {Utils.Validity}
     */
    Utils.validateOne = function(name, value, method, message, options) {
        /** @type {Utils.Validity|boolean} */
        var valid = undefined;
        if(Utils.isObject(message)) { // message was omitted
            options = message;
            message = undefined;
        }

        // Get method from utils, if method is string
        if(Utils.isString(method)) {
            // Get function from utils
            var utilMethod = Utils[method];

            // If no message is provided, try to find one from validationMessages
            if (!Utils.isString(message)) {
                message = Utils.getValidationMessage(method);
                if(message === undefined) {
                    message = "Must be " + method + ".";
                }
            }
            if(!Utils.isFunction(utilMethod)) {
                message = "Don't know how to validate '"+method+"'";
                method = new Utils.Validity(name, value, false, message);
            } else {
                method = utilMethod;
            }
        }

        // Apply validation method
        if(Utils.isFunction(method)) {
            valid = method.apply(Utils, [value]);
        // Validity object
        } else if (method instanceof Utils.Validity) {
            valid = method;
        // validateArray
        } else if (Utils.isArray(method)) {
            valid = Utils.validateArray(name, value, method, false, _.get(options, 'array'));
        // validateObject
        } else if (Utils.isObject(method)) {
            valid = Utils.validateObject(name, value, method, false);
        // Boolean validation
        } else {
            valid = method === true;
        }

        if(!(valid instanceof Utils.Validity)) {
            valid = new Utils.Validity(name, value, valid);
        }

        // Feedback
        if(!valid.isValid()) {
			if(message === undefined) {
				message = 'Invalid.';
			}
            if(Utils.isObject(options) && 'default' in options) {
                if(Utils.isFunction(options.default)) {
                    var def = options.default.apply(Utils, [value]);
                    valid.setCorrectedValue(def);
                } else {
                    valid.setCorrectedValue(options.default);
                }

                var warn = Utils.get(options, 'warn');
                var __warn = Utils.isFunction(warn) ? warn : function() { return warn !== false; };
                if(__warn(value) !== false && valid.getMessage() === undefined) {
                    valid.setMessage(message);
                }
                valid.setValid(true);
            } else {
                valid.setValid(false);
				if(valid.getMessage() === undefined) {
					valid.setMessage(message);
				}
            }
        } else if(!valid.isCorrected()) {
			valid.setMessage(undefined);
		}

        return valid;
    };

    /**
     * Validates a set of values, based on the given parameters.
     *
     * Example usage: Utils.validate("myValidation", {a: ["apple", "isString"]}, "Validation failed.");
     *
     * @param {string} name             The name by which to identify this validation.
     * @param {object} checks           An object of checks. Where the keys are the names of the variables and the
     *                                  values arrays of parameters that are passed to {@link Utils.validateOne}, prepended by
     *                                  <me> and <checks>.
     * @param {string} [consequence]    [optional] A message to be given if validation fails.
     * @param {function} [callback]     [optional] Callback instead of direct error messages. Callback is called with a Validity object as argument.
     *
     * @returns {Utils.Validity}        If validation was passed, an object will be returned containing a the keys
     *                                  of the given checks object, with their validated values.
     *                                  If any of the validations failed, FALSE will be returned.
     */
    Utils.validate = function(name, checks, consequence, callback) {
        // Can also be called without a name
        if(Utils.isObject(name)) {
            callback = consequence;
            consequence = checks;
            checks = name;
            name = 'Validation';
        }

        var validityMap = {};
        var inputMap = {};
		callback = Utils.ensure(callback, Utils.isFunction, callback === false ? function(){} : Utils.LogValidity);

        if(consequence === undefined) {
            consequence = '';
        }

        if(Utils.isObject(checks)) {
            for(var i in checks) {
                checks[i].unshift(i);
                validityMap[i] = Utils.validateOne.apply(Utils, checks[i]);
                inputMap[i] = checks[i][1];
            }
        } else {
            var invalidChecksMessage = "Parameter 'checks' must be object. " + consequence;
            callback(new Utils.Validity(name, checks, invalidChecksMessage));
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
        var valid = new Utils.Validity({
			type: 'multiple',
            name: name,
            input: inputMap,
            valid: isValid,
            validityMap: validityMap
        });
        if(!isValid) {
            valid.setMessage("Validation failed for '" + name + "'.");
        }
        callback(valid);
        return valid;
    };

    /**
     * Validates an object, the same way .validate validates isolated values.
     *
     * Example usage: Utils.validateObject('myObject', {a: 'apple'}, {a: ['isString']}).
     *
     * @param {string} name             The name of the validation.
     * @param {object} obj              The object to check.
     * @param {object} checks           An object with for each key to check an array of arguments [method, message, options]
     *                                  to pass to the validateOne function.
	 * @param {string} [message]			Message to add to ValidityObject in case of invalid object.
     * @param {function} [callback]     A function that takes a Validity object as argument.
     *
     * @return {Utils.Validity}
     */
    Utils.validateObject = function(name, obj, checks, message, callback) {
        if(Utils.isObject(name)) {
            callback = message;
			message = checks;
            checks = obj;
            obj = name;
            name = 'Object';
        }
        if(Utils.isFunction(message)) {
			callback = message;
			message = undefined;
		}
        callback = Utils.ensure(callback, Utils.isFunction, callback === false ? function(){} : Utils.LogValidity);

        if(!Utils.isObject(checks)) {
            var invalid = new Utils.Validity(name, checks, false, "Invalid 'checks' parameter. Must be object.");
			callback(invalid);
            return invalid;
        }

        var validityMap = {};
        for(var prop in checks) {
            var args = Utils.clone(checks[prop]);
            var isArray = Utils.isArray(args);

            // Lazy, single-parameter validation (string, boolean or function)
            if(Utils.isString(args) || Utils.isBoolean(args) || Utils.isFunction(args)) {
                args = [args];
            // Invalid validation
            } else if (!isArray) {
                args = [false, "Invalid validation definition."]
            }

            args.unshift(obj[prop]);
            args.unshift(prop);

            validityMap[prop] = Utils.validateOne.apply(Utils, args);
        }

        var valid = new Utils.Validity({
            name: name,
            input: obj,
            validityMap: validityMap
        });
        var corrected = undefined;
		if(message === undefined) {
			message = "Invalid object for '" + name + "'.";
		}
        for(var prop in validityMap) {
            if(!validityMap[prop].isValid()) {
                valid.setValid(false);
                valid.setMessage(message);
            }
            if(validityMap[prop].isCorrected()) {
                if(corrected === undefined) {
                    corrected = Utils.clone(obj);
                    valid.setCorrectedValue(corrected);
                }
                corrected[prop] = validityMap[prop].getValue();
            }
        }
        if(valid.isCorrected()) {
            valid.setMessage(message);
        }
        valid.setType('object');

        callback(valid);
        return valid;
    };

    /**
     * Validates an array of values, using the given validation function.
     *
     * Example usage: Utils.validateArray("myArray", ['apple', 'banana', 123], ["isString", {default: 'fruit'}]);
     *
     * @param {string} name
     * @param {Array} array                 The array to validate.
     * @param {Array|string|function} itemValidation        The validation arguments [method, message, options]
     * @param {number} [options.minLength=0]        [optional] The minimum length of the array.
     * @param {number} [options.maxLength=Infinity] [optional] The maximum length of the array.
     * @param {string} [options.itemType='Item']    [optional] What to call an item.
     * @param {function} [callback]         [optional] Callback instead of direct error messages. Callback is called with a Validity object as argument.
     */
    Utils.validateArray = function(name, array, itemValidation, message, options, callback) {
        if(Utils.isArray(name)) {
            callback = options;
			options = message;
            message = itemValidation;
            itemValidation = array;
            array = name;
            name = 'Array';
        }
        if(Utils.isObject(message)){
			callback = options;
			options = message;
		}
		var minLength = _.get(options, 'minLength');
		var maxLength = _.get(options, 'maxLength');
		var itemType = _.get(options, 'itemType');

		callback = Utils.ensure(callback, Utils.isFunction, callback === false ? function(){} : Utils.LogValidity);

        if(!Utils.isArray(array)) {
            var invalid = new Utils.Validity({name: name, input: array, valid: false, message: "Must be an array", type: 'array'});
            callback(invalid);
            return invalid;
        }
        if(!Utils.isArray(itemValidation)) {
            itemValidation = [itemValidation];
        }
        var valid = new Utils.Validity(name, array, true);

        if(!Utils.isNumber(minLength)) minLength = 0;
        if(!Utils.isNumber(maxLength)) maxLength = Infinity;
        if(!Utils.isString(itemType)) itemType = 'Item';

        var itemPlural = Utils.plural(itemType);

        if(array.length < minLength) {
            var invalid2 = new Utils.Validity({
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
            var invalid3 = new Utils.Validity({
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
            itemName = Utils.isString(item) ? item : i;

            validationArgs = Utils.clone(itemValidation);
            validationArgs.unshift(item);
            validationArgs.unshift(itemName);

            validityMap[i] = Utils.validateOne.apply(Utils, validationArgs);
        }

        var corrected = undefined;
        var invalidMessage = "Invalid " + itemPlural.toLowerCase() + " in " + name + " array.";
        for(var i in validityMap) {
            if(!validityMap[i].isValid()) {
                valid.setValid(false);
                valid.setMessage(invalidMessage);
            }
            if(validityMap[i].isCorrected()) {
                if(corrected === undefined) {
                    corrected = Utils.clone(array);
                    valid.setCorrectedValue(corrected);
                }
                corrected[i] = validityMap[i].getValue();
            }
        }
        if(valid.isCorrected()) {
            valid.setMessage(invalidMessage);
        }

        valid.setValidityMap(validityMap);
		valid.setType('array');

        callback(valid);
        return valid;
    };

    /**
     * Checks whether the given argument is an instance of the given class.
     * @param {function} checkClass     The class the second argument should be an instance of.
     * @param {object} [arg]            The argument to check. If not provided, the function will return a function
     *                                  that requires a single argument to check if that is an instance of the given class.
     * @returns {*}
     */
    Utils.instanceof = function(checkClass, arg) {
        if(arguments.length < 2) {
            return function(futureArg) {
                return Utils.instanceof(checkClass, futureArg);
            }
        } else {
            return Utils.isObject(checkClass) && arg instanceof checkClass;
        }
    };

    /**
     * Checks whether the given argument is defined, and not null.
     * @param v
     * @returns {boolean}
     */
    Utils.def = function (v) {
        return ((v !== null) && (v !== undefined));
    };

	Utils.ensure = function (variable, evalFunc, defaultValue, message) {
		var sure = variable;
		if (!evalFunc(variable)) {
			sure = defaultValue;
			if (Utils.def(message)) {
				Utils.Log.error("Utils::ensure", message, variable);
			}
		}

		return sure;
	};

	Utils.ensurePath = function(variable, path, evalFunc, defaultValue, message) {
		if(!_.isObject(variable)) {
			variable = {};
		}
		if(_.isArray(path)) {
			_.forEach(path, function(p) {
				variable = Utils.ensurePath(variable, p, evalFunc, defaultValue, p + ": " + message);
			});
			return variable;
		}

		var check = _.get(variable, path);
		if (!evalFunc(check)) {
			_.set(variable, path, defaultValue);
			if (Utils.def(message)) {
				Utils.Log.error(message, variable);
			}
		}

		return variable;
	};

})(window.Utils);