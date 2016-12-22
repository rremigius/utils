var Utils = window.Utils || {};

(function(Utils) {

    Utils.requireUtils(['isString', 'isObject', 'isArray', 'isNumber', 'isBoolean']);

    Utils.plural = function(string) {
        if(!Utils.isString(string)) {
            return "things";
        }

        // Covers some irregular plurals
        if(string.slice(-2) === 'us') {
            return string.slice(0, string.length-2) + 'i';
        }
        if(string.slice(-1) === 's') {
            return string + 'es';
        }

        return string + 's';
    };

    Utils.capitaliseFirst = function (s) {
        if (!Utils.isString(s)) {
            return null;
        }

        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    Utils.dotString = function(number) {
        if(!Utils.isNumber(number)) {
            return "";
        }
        var str = "";
        for(var i = 0; i < number; i++) {
            str += '.';
        }
        return str;
    };

    Utils.truncateString = function(str, maxLength) {
        if (!Utils.isString(str)) {
            return str;
        }

        if(str.length > 3 && str.length > maxLength-3) {
            return str.substring(0, maxLength-3) + '...';
        }
        return str;
    };

    Utils.objectToString = function(value, maxLength) {
        if(maxLength <= 0) {
            return '';
        }
        if(maxLength === 1) {
            return '{'
        }
        if(maxLength <= 5) {
            if(Object.keys(value).length === 0) {
                return '{}';
            }
            return '{' + Utils.dotString(maxLength-2) + '}';
        }
        var str = "{";
        var keys = Object.keys(value);
        var lastKey = keys[keys.length-1];
        var keyCount = 0;
        for(var i in value) {
            var commaCount = str.length === 1 ? 0 : 1;
            var dotCount = i === lastKey ? 0 : 4;
            var keyValue = Utils.valueToString(value[i], 7);
            if(str.length + commaCount + i.length + 1 + keyValue.length + dotCount < maxLength) {
                if(str.length > 1) {
                    str += ',';
                }
                str += i + ":" + keyValue;
                keyCount++;
            } else {
                break;
            }
        }
        if(keyCount < keys.length) {
            if(str.length > 1) {
                str += ',';
            }
            str += Utils.dotString(Math.min(3, maxLength - str.length - 1));
        }
        str += "}";
        return str;
    };

    Utils.arrayToString = function(value, maxLength) {
        if(maxLength <= 0) {
            return '';
        }
        if(maxLength === 1) {
            return '[';
        }
        if(maxLength <= 5) {
            if(value.length === 0) return '[]';
            return '[' + Utils.dotString(maxLength-2) + ']'
        }
        var str = '[';
        var keyCount = 0;
        for(var i = 0; i<value.length; i++) {
            var itemValue = Utils.valueToString(value[i], 7);
            var dotCount = i < value.length-1 ? 4 : 0;
            var commaCount = i === 0 ? 0 : 1;
            if(str.length + commaCount + itemValue.length + dotCount < maxLength) {
                if(i !== 0) {
                    str += ',';
                }
                str += itemValue;
                keyCount++;
            } else {
                break;
            }
        }
        if(keyCount < value.length) {
            if(str.length > 1) {
                str += ',';
            }
            str += Utils.dotString(Math.min(3, maxLength - str.length - 1));
        }
        str += ']';
        return str;
    };

    Utils.numberToString = function(value, maxLength) {
        if(maxLength <= 0) {
            return '';
        }
        var strValue = ""+value;
        if(strValue.length <= maxLength) {
            return strValue;
        }
        if(maxLength < 5) {
            return Utils.dotString(Math.min(3, maxLength));
        }
        return value.toExponential(Math.max(0, maxLength-5));
    };

    Utils.valueToString = function(value, maxLength) {
        if(maxLength <= 0) {
            return "";
        }
        var str = "";
        if(Utils.isString(value)) {
            if(maxLength === 1) {
                return '"';
            }
            if(value.length <= maxLength-2) {
                return '"' + value + '"';
            }
            if(maxLength <= 5) {
                return '"' + Utils.dotString(maxLength-2) + '"';
            }
            return '"' + Utils.truncateString(value, maxLength-2) + '"';
        }
        if(Utils.isNumber(value)) {
            return Utils.numberToString(value, maxLength);
        }
        if(Utils.isBoolean(value)) {
            if(maxLength < 5) {
                return value ? 't' : 'f';
            }
            return value ? 'true' : 'false';
        }
        if(Utils.isArray(value)) {
            return Utils.arrayToString(value, maxLength);
        }
        if(Utils.isObject(value)) {
            return Utils.objectToString(value, maxLength);
        }

        return Utils.truncateString(""+value, maxLength);
    };

})(Utils);