(function(){
	const _ = require('lodash');

	var utils = {
		String: require('./src/string'),
		Validation: require('./src/validation'),
		Error: require('./src/error'),
		DOM: require('./src/dom'),
		Execution: require('./src/execution')
	};

	const Utils = require('./src/extend-utils');
	Utils.extendUtils(_, ['toString']);

	for(var key in utils) {
		Utils.extendUtils(utils[key]);
	}

	module.exports = Utils;
})();
