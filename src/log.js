const { isObject, find, isFunction } = require('lodash');

class Log {
	constructor(name, driver) {
		this.name = name || '';
		this._level = undefined;

		this._driver = driver || console;
	}

	/**
	 * Creates a Log instance with the given name. If an instance was already created before, it will return the existing
	 * instance.
	 * @param {string} [name]
	 * @return {Log}
	 */
	static instance(name) {
		let LogClass = this;
		// The Singleton instance
		if(!name) {
			if(!LogClass._instance) {
				LogClass._instance = new LogClass(LogClass._defaultName);
				LogClass._instance.setLevel(LogClass.Level.ALL); // default level
			}
			return LogClass._instance;
		}

		// Named instances
		let log = LogClass._instances[name];
		if(!log) {
			log = LogClass._instances[name] = new LogClass(name);
		}
		return log;
	}
	static error() {
		this.instance().error.apply(this.instance(), arguments);
	}
	static info() {
		this.instance().info.apply(this.instance(), arguments);
	}
	static warn() {
		this.instance().warn.apply(this.instance(), arguments);
	}
	static log() {
		this.instance().log.apply(this.instance(), arguments);
	}
	static trace() {
		this.instance().trace.apply(this.instance(), arguments);
	}
	static setLevel(level) {
		this.instance().setLevel(level);
	}
	static getLevel() {
		return this.instance().getLevel();
	}
	static getDefaultLogName() {
		return this._defaultName;
	}
	static getDriver() {
		return this.instance().getDriver();
	}
	static setDriver(driver) {
		return this.instance().setDriver(driver);
	}
	getLogClass() {
		return this.constructor;
	}
	setDriver(driver) {
		let valid = false;
		if(isObject(driver)) {
			// Driver must have all necessary logging methods
			valid = !find(['error', 'info', 'warn', 'log', 'trace'], method => !isFunction(driver[method]))
		}
		if(!valid) {
			this.warn("Invalid log driver. Falling back to default (console).");
			return;
		}
		this._driver = driver;
	}
	getDriver() {
		let LogClass = this.getLogClass();
		if(this.name === Log.getDefaultLogName()) {
			return this._driver;
		}
		return this._driver || LogClass.getDriver();
	}
	setLevel(level) {
		this._level = level;
	}
	getLevel() {
		let LogClass = this.getLogClass();
		if(this.name === LogClass.getDefaultLogName()){
			return this._level;
		}

		return this._level !== undefined ? this._level : LogClass.getLevel();
	}
	debug() {
		this._log('debug', Log.Level.DEBUG, arguments);
		}
	log(){
		this._log('log', Log.Level.DEBUG, arguments);
	}
	info(){
		this._log('info', Log.Level.INFO, arguments);
	}
	warn(){
		this._log('warn', Log.Level.WARN, arguments);
	}
	error() {
		this._log('error', Log.Level.ERROR, arguments);
		}
	trace() {
		this._log('trace', Log.Level.DEBUG, arguments);
	}
	_log(method, level, args) {
		if(level >= this.getLevel()) {
			let driver = this.getDriver();
			driver[method].apply(driver, this._addName(args));
		}
	}
	_addName(args) {
		[].unshift.apply(args, [this.name, ":"]);

		return args;
	}
}
Log._defaultName = 'Log';
Log.Level = {
	ALL: 0,
	DEBUG: 1,
	INFO: 2,
	WARN: 3,
	ERROR: 4,
	FATAL: 5,
	OFF: 6
};
Log._instance = null;
Log._instances = {};

module.exports = Log;
