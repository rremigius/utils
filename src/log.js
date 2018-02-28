class Log {
	constructor(name, driver) {
		this.name = name || '';
		this.driver = driver || console;
		this.stackLevels = ['error', 'warn'];
	}
	static factory(name) {
		return new Log(name);
	}
	static instance() {
		if(Log._instance === null) {
			Log._instance = new Log();
		}
		return Log._instance;
	}
	static error() {
		Log.instance().error.apply(Log.instance(), arguments);
	}
	static info() {
		Log.instance().info.apply(Log.instance(), arguments);
	}
	static warn() {
		Log.instance().info.apply(Log.instance(), arguments);
	}
	static log() {
		Log.instance().info.apply(Log.instance(), arguments);
	}
	static trace() {
		Log.instance().info.apply(Log.instance(), arguments);
	}
	static setSuppressErrors(status) {
		Log._suppressErrors = status === true;
	}
	static setSuppressWarnings(status) {
		Log._suppressWarnings = status === true;
	}
	error() {
		if (!Log._suppressErrors) {
			this.driver.error.apply(this.driver, this._addName(arguments));
		}
	}
	info(){
		this.driver.info.apply(this.driver, this._addName(arguments));
	}
	warn(){
		if(!Log._suppressWarnings) {
			this.driver.warn.apply(this.driver, this._addName(arguments));
		}
	}
	log(){
		this.driver.log.apply(this.driver, this._addName(arguments));
	}
	trace() {
		this.driver.trace.apply(this.driver, this._addName(arguments));
	}

	_addName(args) {
		[].unshift.apply(args, [this.name, ":"]);

		return args;
	}
}

Log._instance = null;

module.exports = Log;
