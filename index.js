(function(){
	const _ = require('lodash');

	var utils = {
		String: require('./src/utils/string'),
		Validation: require('./src/utils/validation'),
		Error: require('./src/utils/error'),
		DOM: require('./src/utils/dom'),
		Execution: require('./src/utils/execution')
	};

	const Utils = require('./src/utils-core');
	Utils.extendUtils(_, ['toString']);

	for(var key in utils) {
		Utils.extendUtils(utils[key]);
	}

	module.exports = Utils;
})();
