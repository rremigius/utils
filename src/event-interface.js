'use strict';

const _ = require('lodash');

const EventInterface = function() {
  this._listeners = {};
};

EventInterface.extend = function(obj) {
  let events = new EventInterface();
  events.extend(obj);
};

EventInterface.prototype.extend = function(obj) {
  obj.on = this.on.bind(this);
  obj.fire = this.fire.bind(this);
};

EventInterface.prototype.getOnMethod = function() {
  return this.on.bind(this);
};

EventInterface.prototype.getFireMethod = function() {
  return this.fire.bind(this);
};

EventInterface.prototype.getOffMethod = function() {
	return this.off.bind(this);
};

EventInterface.prototype.on = function(event, callback) {
  if (!(event in this._listeners)) {
    this._listeners[event] = [];
  }

  this._listeners[event].push(callback);
};

EventInterface.prototype.off = function(event, callback) {
	if(!(event in this._listeners)) return;
	let listeners = this._listeners[event];

	for(let i = listeners.length-1; i >= 0; i--) {
		if(listeners[i] === callback) {
			listeners.splice(i, 1);
		}
	}
};

EventInterface.prototype.fire = function(event, data) {
  if (!(event in this._listeners)) {
    return;
  }

  // Remove listeners marked for removal
	_.remove(this._listeners[event], listener => listener.remove);

  for (let i in this._listeners[event]) {
  	let listener = this._listeners[event][i];
  	if(_.isFunction(listener.callback)) {
  		listener.callback(data);
		} else {
			this._listeners[event][i](data);
		}
  }
};

module.exports = EventInterface;
