const Timer = function(name) {
	this.name = name;
	this.start = Date.now();
	this.duration = 0;

	if(!(name in Timer._stats)) {
		Timer._stats[name] = {
			sum: 0,
			count: 0
		};
	}
};
Timer._stats = {};
Timer.start = function(name) {
	return new Timer(name);
};

Timer.prototype._updateStats = function() {
	const stats = this.getStats();
	stats.count++;
	stats.sum += this.duration;
};
Timer.prototype.getStats = function() {
	return Timer._stats[this.name];
};
Timer.prototype.stop = function(logEvery) {
	this.duration = Date.now() - this.start;
	this._updateStats();
	if(logEvery > 0 && this.getStats().count % logEvery === 0) {
		this.log();
	}
	return this.duration;
};
Timer.prototype.getAverage = function() {
	const stats = this.getStats();
	return stats.sum / stats.count;
};
Timer.prototype.log = function() {
	console.log(`Timer [${this.name}] Current: ${this.duration} ms; Average: ${this.getAverage()} ms; Count: ${this.getStats().count}.`);
};
module.exports = Timer;