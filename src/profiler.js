const Log = require('./log');

const log = Log.instance("utils/profiler");

function Profiler(name) {
	this.name = name;
	this._start = 0;
}
Profiler.prototype.start = function() {
	this._start = Date.now();
};
Profiler.prototype.stop = function(logInterval = 1) {
	this._stop = Date.now();
	if(logInterval > 0) {
		const endCount = (profilerEndCounts[this.name] || 0) + 1;
		const total = (profilerTotals[this.name] || 0) + this.getTime();
		if(endCount % logInterval === 0) {
			const average = endCount > 1 ? ` Average: ${total / endCount} ms.` : '';
			log.log(`${this.name}: ${this.getTime()} ms.${average}`);
		}
		profilerEndCounts[this.name] = endCount;
	}
};
Profiler.prototype.getTime = function() {
	return this._stop - this._start;
};

const profilers = {};
const profilerEndCounts = {};
const profilerTotals = {};

Profiler.get = function(name) {
	return profilers[name];
};

Profiler.start = function(name) {
	const profiler = new Profiler(name);
	profilers[name] = profiler;
	profiler.start();
	return profiler;
};
Profiler.stop = function(name, log = 0) {
	const profiler = Profiler.get(name);
	if(!profiler) {
		log.error(`Profiler not running: ${name}.`);
		return;
	}
	profiler.stop(log);
};

module.exports = Profiler;
