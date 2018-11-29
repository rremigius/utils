const Log = function(name, driver) {
  this.name = name || '';
  this.driver = driver || console;
  this.stackLevels = ['error', 'warn'];
};
Log.factory = function(name) {
  return Log.create(name);
};
Log.create = function(name) {
  return new Log(name);
};
Log.instance = function() {
  if(Log._instance === null) {
    Log._instance = new Log();
  }
  return Log._instance;
};
Log.error = function() {
  Log.instance().error.apply(Log.instance(), arguments);
};
Log.info = function() {
  Log.instance().info.apply(Log.instance(), arguments);
};
Log.warn = function() {
  Log.instance().warn.apply(Log.instance(), arguments);
};
Log.log = function() {
  Log.instance().log.apply(Log.instance(), arguments);
};
Log.trace = function() {
  Log.instance().trace.apply(Log.instance(), arguments);
};
Log.setSuppressErrors = function(status) {
  Log._suppressErrors = status === true;
};
Log.setSuppressWarnings = function(status) {
  Log._suppressWarnings = status === true;
};
Log.prototype.error = function() {
  if (!Log._suppressErrors) {
    this.driver.error.apply(this.driver, this._addName(arguments));
  }
};
Log.prototype.info = function(){
  this.driver.info.apply(this.driver, this._addName(arguments));
};
Log.prototype.warn = function(){
  if(!Log._suppressWarnings) {
    this.driver.warn.apply(this.driver, this._addName(arguments));
  }
};
Log.prototype.log = function(){
  this.driver.log.apply(this.driver, this._addName(arguments));
};
Log.prototype.trace = function() {
  this.driver.trace.apply(this.driver, this._addName(arguments));
};
Log.prototype._addName = function(args) {
  [].unshift.apply(args, [this.name, ":"]);

  return args;
};

Log._instance = null;

module.exports = Log;
