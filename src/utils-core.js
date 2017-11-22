(function() {
	var _ = require('lodash');
	var Log = require('./utils/log');

	var Utils = {};

	Utils.extendUtils = function (extend, overwrite, ignore) {
		if (typeof(extend) !== 'object' && typeof(extend) !== 'function') {
			Log.error("Could not extend utils. Extension must be object or function.");
			return false;
		}
		if (!_.isArray(overwrite)) {
			overwrite = [];
		}
		if (!_.isArray(ignore)) {
			ignore = [];
		}

		for (var i in extend) {
			if (ignore.indexOf(i) >= 0) {
				continue;
			}
			if (i in Utils && overwrite.indexOf(i) < 0) {
				Log.error("'" + i + "' already defined in Utils.");
				continue;
			}
			Utils[i] = extend[i];
		}
	};

	module.exports = Utils;
})();
