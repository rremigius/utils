(function() {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	var Utils = isNode ? require('../utils-core').Utils : window.Utils;
	if(!Utils) {
		console.error("UtilsCore not loaded.");
		return false;
	}

	var Str = {};

	Str.plural = function(string) {
		if(!Utils.isString(string)) {
			return "things";
		}

		// Covers some irregular plurals
		if(string.slice(-1) === 's' || string.slice(-2) === 'sh') {
			return string + 'es';
		}

		return string + 's';
	};

	Str.capitaliseFirst = function (s) {
		if (!Utils.isString(s)) {
			return null;
		}

		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	Str.dotString = function(number) {
		if(!Utils.isNumber(number)) {
			return "";
		}
		var str = "";
		for(var i = 0; i < number; i++) {
			str += '.';
		}
		return str;
	};

	Str.truncateString = function(str, maxLength) {
		if (!Utils.isString(str)) {
			return str;
		}

		if(str.length > 3 && str.length > maxLength-3) {
			return str.substring(0, maxLength-3) + '...';
		}
		return str;
	};

	Str.objectToString = function(value, maxLength) {
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

	Str.arrayToString = function(value, maxLength) {
		if(maxLength <= 0) {
			return '';
		}
		if(maxLength === 1) {
			return '[';
		}
		var countCount = 2 + (""+value.length).length;
		if(maxLength <= 5 + countCount) {
			if(value.length === 0) return '[]';
			return '[' + Utils.dotString(Math.min(3, maxLength-2)) + ']'
		}
		var str = '[';
		var keyCount = 0;
		for(var i = 0; i<value.length; i++) {
			var itemValue = Utils.valueToString(value[i], 7);
			var dotCount = i < value.length-1 ? 4 : 0;
			var commaCount = i === 0 ? 0 : 1;
			if(str.length + commaCount + itemValue.length + dotCount + countCount < maxLength) {
				if(i !== 0) {
					str += ',';
				}
				str += itemValue;
				keyCount++;
				if(keyCount >= 2) {
					break;
				}
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
		str += ']' + '(' + value.length +')';
		return str;
	};

	Str.numberToString = function(value, maxLength) {
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

	Str.valueToString = function(value, maxLength) {
		if(maxLength <= 0) {
			return "";
		}
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

	module.exports.String = Str;
})();