(function() {

	const _ = require('lodash');

	const Log = {
		_logger: console
	};

	Log.setLogger = function(logger) {
		Log._logger = logger;
	};

	Log._log = function(method, args) {
		if(!_.isFunction(Log._logger[method])) {
			console.error("Logger does not have method '" + method + "'.");
			return;
		}
		Log._logger[method].apply(Log._logger, args);
	};

	Log.log = function() {
		Log._log('log', arguments);
	};
	Log.info = function() {
		Log._log('info', arguments);
	};
	Log.warn = function() {
		Log._log('warn', arguments);
	};
	Log.error = function() {
		Log._log('error', arguments);
	};
	Log.stack = function() {
		Log._log('stack', arguments);
	};

	module.exports = Log;
})();
