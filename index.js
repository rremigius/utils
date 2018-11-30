const _ = require('lodash');

const utils = {
	String: require('./src/string'),
	Validation: require('./src/validation'),
	DOM: require('./src/dom'),
	Execution: require('./src/execution')
};
const Error = require('./src/error');

const Utils = require('./src/extend-utils');
Utils.extendUtils(_, ['toString']);

for(let key in utils) {
	Utils.extendUtils(utils[key]);
}
Utils.Error = Error;

module.exports = Utils;