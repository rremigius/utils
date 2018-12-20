const { isObject, find, isFunction } = require('lodash');

const Log = function(name, driver) {
  this.name = name || '';
  this._level = undefined;

  this._driver = driver || console;
};

/**
 * Creates a Log instance with the given name. If an instance was already created before, it will return the existing
 * instance.
 * @param {string} [name]
 * @return {Log}
 */
Log.instance = function(name) {
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
};
Log.error = function() {
  this.instance().error.apply(this.instance(), arguments);
};
Log.info = function() {
  this.instance().info.apply(this.instance(), arguments);
};
Log.warn = function() {
  this.instance().warn.apply(this.instance(), arguments);
};
Log.log = function() {
  this.instance().log.apply(this.instance(), arguments);
};
Log.trace = function() {
  this.instance().trace.apply(this.instance(), arguments);
};
Log.setLevel = function(level) {
  this.instance().setLevel(level);
};
Log.getLevel = function() {
  return this.instance().getLevel();
};
Log.getDefaultLogName = function() {
  return this._defaultName;
};
Log.getDriver = function() {
  return this.instance().getDriver();
};
Log.setDriver = function(driver) {
  return this.instance().setDriver(driver);
};
Log.prototype.getLogClass = function() {
  return this.constructor;
};
Log.prototype.setDriver = function(driver) {
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
};
Log.prototype.getDriver = function() {
  let LogClass = this.getLogClass();
  if(this.name === Log.getDefaultLogName()) {
    return this._driver;
  }
  return this._driver || LogClass.getDriver();
};
Log.prototype.setLevel = function(level) {
  this._level = level;
};
Log.prototype.getLevel = function() {
  let LogClass = this.getLogClass();
  if(this.name === LogClass.getDefaultLogName()){
    return this._level;
  }

  return this._level !== undefined ? this._level : LogClass.getLevel();
};
Log.prototype.debug = function() {
  this._log('debug', Log.Level.DEBUG, arguments);
};
Log.prototype.log = function(){
  this._log('log', Log.Level.DEBUG, arguments);
};
Log.prototype.info = function(){
  this._log('info', Log.Level.INFO, arguments);
};
Log.prototype.warn = function(){
  this._log('warn', Log.Level.WARN, arguments);
};
Log.prototype.error = function() {
  this._log('error', Log.Level.ERROR, arguments);
};
Log.prototype.trace = function() {
  this._log('trace', Log.Level.DEBUG, arguments);
};
Log.prototype._log = function(method, level, args) {
  if(level >= this.getLevel()) {
    let driver = this.getDriver();
    driver[method].apply(driver, this._addName(args));
  }
};
Log.prototype._addName = function(args) {
  [].unshift.apply(args, ['[ ' + this.name + ' ]']);

  return args;
};
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
