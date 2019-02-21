const { isObject, find, isFunction, isArray, isEmpty } = require('lodash');

const Log = function(name, driver) {
  this.name = name || 'Log';
  this._level = undefined;
  this._parent = undefined;
  this._driver = driver;
};
Log.nativeLog = console;

Log.prototype.instance = function(name) {
  let instance = new this.constructor(name);
  instance.setParent(this);
  return instance;
};
Log.prototype.setParent = function(parentLog) {
  this._parent = parentLog;
};
Log.prototype.getParent = function() {
  return this._parent;
};
Log.prototype.getPath = function() {
  let parentPath = this._parent && this._parent.getPath();
  return parentPath.concat(this.name);
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
Log.prototype.resetDriver = function() {
  this._driver = undefined;
};
Log.prototype.getDriver = function() {
  return this._driver || (this._parent && this._parent.getDriver());
};
Log.prototype.setLevel = function(level) {
  this._level = level;
};
Log.prototype.getLevel = function() {
  return this._level || (this._parent && this._parent.getLevel());
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

Log.root = function() {
  let Class = this;
  if(!Class._root) {
    Class._root = new Class('Log');
    Class._root.setLevel(Class.Level.ALL); // default level
  }
  return Class._root;
};

/**
 * Creates a Log instance with the given name. If an instance was already created before, it will return the existing
 * instance.
 * @param {string|Array} [name]
 * @return {Log}
 */
Log.instance = function(name) {
  if(name in this._instances) {
    return this._instances[name];
  }
  if(isEmpty(name)) {
    return Log.root();
  }

  // Split path
  if(!isArray(name)) {
    name = name.split('/');
  }
  // Clone path
  let path = name.slice();

  // Get leaf name
  let leaf = path.pop();

  // Create child from parent
  let parent = Log.instance(path);
  let instance = parent.instance(leaf);

  // Store new instance under path name
  if(isArray(name)) name = name.join('/');
  this._instances[name] = instance;

  return instance;
};
Log.error = function() {
  this.root().error.apply(this.instance(), arguments);
};
Log.info = function() {
  this.root().info.apply(this.instance(), arguments);
};
Log.warn = function() {
  this.root().warn.apply(this.instance(), arguments);
};
Log.log = function() {
  this.root().log.apply(this.instance(), arguments);
};
Log.trace = function() {
  this.root().trace.apply(this.instance(), arguments);
};
Log.setLevel = function(level) {
  this.root().setLevel(level);
};
Log.getLevel = function() {
  return this.root().getLevel();
};
Log.getDriver = function() {
  return this.root().getDriver();
};
Log.setDriver = function(driver) {
  return this.root().setDriver(driver);
};
Log.Level = {
	ALL: 0,
	DEBUG: 1,
	INFO: 2,
	WARN: 3,
	ERROR: 4,
	FATAL: 5,
	OFF: 6
};
Log._root = null;
Log._instances = {};

module.exports = Log;
