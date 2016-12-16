var Utils = window.Utils || {};
(function(Utils) {
    if(!Utils.requireMethods(['isObject', 'isArray', 'isString', 'isNumber', 'isFunction', 'clone', 'capitaliseFirst', 'plural'])) {
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
        } else {
            this._name = name;
            this._input = input;
            this._valid = valid;
            this._message = message;
        }
    };
    Utils.Validity.prototype._name = undefined;
    Utils.Validity.prototype._input = undefined;
    Utils.Validity.prototype._valid = true;
    Utils.Validity.prototype._validityMap = undefined;
    Utils.Validity.prototype._corrected = undefined;
    Utils.Validity.prototype._isCorrected = false;
    Utils.Validity.prototype._info = undefined;

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

    var badValueMessage = function(name, value, why, defaultTo) {
        // If reason does not end with full stop, add one.
        if(!/\.\s*?/.exec(why)) {
            why += '.';
        }

        var messages = [];
        messages.push("Bad value for '{0}'.".fmt(name));
        if(Utils.isObject(why)) {
            messages.push("Expected structure:");
            messages.push(why);
        } else {
            messages.push(why);
        }
        messages.push("Given: ");
        messages.push(value);
        if(arguments.length === 4) {
            messages.push("Using default:");
            messages.push(defaultTo);
        }
        return messages;
    };
    var valueError = function(me, name, value, why) {
        var messages = badValueMessage(name, value, why);
        Utils.logger.log('error', me, messages, {stackOffset: 3});
    };
    var valueWarn = function(me, name, value, why, defaultTo) {
        var messages = badValueMessage(name, value, why, defaultTo);
        Utils.logger.log('warn', me, messages, {stackOffset: 3});
    };

    var validationMessages = {
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
     * Validates a value, based on the given parameters
     *
     * @param {string} name                     The name of the variable to check.
     * @param value                             The value of the variable to check.
     * @param {string|boolean|function|Utils.Validity} method     Boolean check for validity, or name of util for validation.
     * @param {string} [message]               [Optional] The message to display when variable is not valid.
     * @param {object} options                  An object of extra option.
     * @param [options.default]                 A default value if given value is invalid. If not provided, validation will fail if invalid value.
     * @param {boolean} [options.warn]             If false, no warning will be given if default is chosen. Defaults to true.
     *
     * @return {object}     Result object with following properties:
     *                          name        Name of the variable.
     *                          original    Given value of the variable.
     *                          valid       Validated value of the variable.
     *                          [warning]   [if available] The warning object {message: ...} issued for
     *                                        this variable.
     *                          [error]     [if available] The error object {message: ...} issued for
     *                                        this variable.
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
                if (method in validationMessages) {
                    message = validationMessages[method];
                } else {
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
        // No message provided or found, go for generic.
        if(!Utils.isString(message)) {
            message = "Invalid.";
        }

        // Apply validation method
        if(Utils.isFunction(method)) {
            valid = method.apply(Utils, [value]);
        // Validity object
        } else if (method instanceof Utils.Validity) {
            valid = method;
        // validateArray
        } else if (Utils.isArray(method)) {
            valid = Utils.validateArray(name, value, method);
        // validateObject
        } else if (Utils.isObject(method)) {
            valid = Utils.validateObject(name, value, method);
        // Boolean validation
        } else {
            valid = method === true;
        }

        if(!(valid instanceof Utils.Validity)) {
            valid = new Utils.Validity(name, value, valid);
        }

        // Feedback
        if(!valid.isValid()) {
            if(Utils.isObject(options) && 'default' in options) {
                var warn = Utils.get(options, 'warn');
                var __warn = Utils.isFunction(warn) ? warn : function() { return warn !== false; };
                if(__warn(value) !== false) {
                    valid.setMessage(message);
                }
                if(Utils.isFunction(options.default)) {
                    var def = options.default.apply(Utils, [value]);
                    valid.setCorrectedValue(def);
                } else {
                    valid.setCorrectedValue(options.default);
                }
                valid.setValid(true);
            } else {
                valid.setValid(false);
                valid.setMessage(message);
            }
        }

        return valid;
    };

    /**
     * Validates a set of values, based on the given parameters.
     * @param {string} name             The name by which to identify this validation.
     * @param {object} checks           An object of checks. Where the keys are the names of the variables and the
     *                                  values arrays of parameters that are passed to {@link Utils.validateOne}, prepended by
     *                                  <me> and <checks>.
     * @param {string} [consequence]    [optional] A message to be given if validation fails.
     * @param {function} [errCallback]  [optional] Callback instead of direct error messages. Callback is called with
     *                                  (data, error) as arguments.
     *
     * @returns {object|boolean}           If validation was passed, an object will be returned containing a the keys
     *                                  of the given checks object, with their validated values.
     *                                  If any of the validations failed, FALSE will be returned.
     */
    Utils.validate = function(name, checks, consequence, errCallback) {
        var validityMap = {};
        var inputMap = {};
        var hasCallback = Utils.isFunction(errCallback);

        if(Utils.isObject(checks)) {
            for(var i in checks) {
                checks[i].unshift(i);
                validityMap[i] = Utils.validateOne.apply(Utils, checks[i]);
                inputMap = checks[i][0];
            }
        } else {
            if(hasCallback) {
                errCallback(null, {
                    message: "Parameter 'checks' must be object. " + consequence
                });
            } else {
                Utils.logger.error("Parameter 'checks' must be object. " + consequence, checks);
                if(consequence !== undefined && consequence !== null) {
                    //Log.logGeneric('error', [consequence], {stackOffset: 1});
                }
            }
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
            name: name,
            input: inputMap,
            valid: isValid,
            validityMap: validityMap
        });
        if(!isValid) {
            valid.setMessage(consequence);
            if(hasCallback) {
                // Construct error map
                var errorMap = valid.createErrorMap();
                errCallback(null, {
                    message: consequence,
                    errorMap: errorMap
                });
            } else {
                if(consequence !== undefined && consequence !== null) {
                    Utils.logger.error(consequence);
                }
            }
        }
        return valid;
    };

    /**
     * Validates an object, the same way .validate validates isolated values.
     * @param {string} name
     * @param {object} obj
     * @param {object} checks
     * @param {string} [consequence]
     * @param {function} [errCallback]
     */
    Utils.validateObject = function(name, obj, checks, consequence, errCallback) {
        // Simply add a check to see if the given value is an object, but hooked to the same error handling.
        var valid1 = Utils.validate(name, {
            obj : [obj, 'isObject']
        }, "Could not validate object.", errCallback);
        if(!valid1) return false;

        var validityMap = {};
        for(var prop in checks) {
            var args = Utils.clone(checks[prop]);
            var isArray = Utils.isArray(args);

            // Lazy, single-parameter validation (string or function)
            if(Utils.isString(args) || Utils.isFunction(args)) {
                args = [args];
            // Invalid validation
            } else if (!isArray) {
                args = [false, "Invalid validation definition."]
            }

            args.unshift(obj[prop]);
            args.unshift(prop);

            validityMap[prop] = Utils.validateOne.apply(Utils, args);
        }

        var validity = new Utils.Validity({
            name: name,
            input: obj,
            validityMap: validityMap
        });
        var corrected = undefined;
        for(var prop in validityMap) {
            if(!validityMap[prop].isValid()) {
                validity.setValid(false);
                validity.setMessage("Invalid object for '" + name + "'. " + consequence);
            }
            if(validityMap[prop].isCorrected()) {
                if(corrected === undefined) {
                    corrected = Utils.clone(obj);
                    validity.setCorrectedValue(corrected);
                }
                corrected[prop] = validityMap[prop].getValue();
            }
        }

        return validity;
    };

    /**
     * Validates an array of values, using the given validation function.
     * @param {string} name
     * @param {Array} array                 The array to validate.
     * @param {Array|string|function} itemValidation        The validation arguments [method, message, options]
     * @param {number} [minLength=0]        The minimum length of the array.
     * @param {number} [maxLength=Infinity] The maximum length of the array.
     * @param {string} [itemType='Item']    What to call an item.
     */
    Utils.validateArray = function(name, array, itemValidation, minLength, maxLength, itemType) {
        if(!Utils.isArray(array)) {
            return new Utils.Validity(name, array, false, "Must be an array.");
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
            return new Utils.Validity({
                name: name,
                input: array,
                valid: false,
                message: name + " must contain at least " + minLength + " "+itemPlural.toLowerCase()
            });
        }
        if(array.length > maxLength) {
            return new Utils.Validity({
                name: name,
                input: array,
                valid: false,
                message: name + " may contain at most " + maxLength + " "+itemPlural.toLowerCase()
            });
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
        for(var i in validityMap) {
            if(!validityMap[i].isValid()) {
                valid.setValid(false);
                valid.setMessage("Invalid " + itemPlural.toLowerCase() + " in " + name + " array.");
            }
            if(validityMap[i].isCorrected()) {
                if(corrected === undefined) {
                    corrected = Utils.clone(array);
                    valid.setCorrectedValue(corrected);
                }
                corrected[i] = validityMap[i].getValue();
            }
        }
        valid.setValidityMap(validityMap);

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

})(window.Utils);