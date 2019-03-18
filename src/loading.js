'use strict';

const Err  = require('./error');
const EventInterface = require('./event-interface');

const Loading = function () {
  this._isLoading = false;
  this._loadErrors = {};
  this._loaded = {};
  this._promises = {};
  this._resetFinalPromise();

  this._eventInterface = new EventInterface();

  this.on = this._eventInterface.getOnMethod();
  this.fire = this._eventInterface.getFireMethod();
};

Loading.prototype._resetFinalPromise = function() {
  let promise = new Promise((resolve, reject) => {
    this._finalPromise = {resolve, reject};
  });
  promise.catch(()=>{}); // we don't care about the final promise here, but we need to catch it anyway
  this._finalPromise.promise = promise;
  return promise;
};

Loading.prototype.isLoading = function() {
  return this._isLoading;
};

/**
 *
 * @param {string} name       Name of the loading item.
 * @param {number} [timeout]  Timeout, after which the loading promise will be rejected.
 * @param {Promise} promise   Existing promise to wait for.
 * @return {Promise<any>}
 */
Loading.prototype.start = function(name = 'loading', timeout = undefined, promise = undefined) {
  let loadingPromise = new Promise( (resolve, reject) => {

    // Store reject/resolve methods outside of Promise
    this._promises[name] = {
      resolve: resolve,
      reject: reject,
    };

    // Set timeout
    if(timeout) {
      setTimeout(()=>{
        if(!this.isFinished(name)) {
          reject(new Err("Timed out."))
        }
      }, timeout);
    }

    // Wrap given promise
    if(promise instanceof Promise) {
      promise.then(resolve).catch(reject);
    }
  });
  this._promises[name].promise = loadingPromise;
  loadingPromise.catch(()=>{});

  // First thing loading
  if(!this._isLoading) {
    this._firstLoad();
  }

  this._startWaiting(name, loadingPromise);

  return loadingPromise;
};

Loading.prototype.wait = function(name) {
  if(name === undefined) {
    return this._finalPromise.promise;
  }
  return this._promises[name].promise;
};

Loading.prototype.done = function(name, result) {
  if(this.isFinished(name)) return;

  this._loaded[name] = result;
  if(name in this._promises) {
    this._promises[name].resolve(result);
    return this._promises[name];
  }
};

Loading.prototype.error = function(name, err) {
  if(this.isFinished(name)) return;

  this._loadErrors[name] = err;
  if(name in this._promises) {
    this._promises[name].reject(err);
  }
};

Loading.prototype.isFinished = function(name) {
  return name in this._loadErrors || name in this._loaded;
};

Loading.prototype._emitStart = function() {
  this.fire('start')
};

Loading.prototype._emitDone = function(loaded) {
  this.fire('load', loaded);
};

Loading.prototype._emitError = function(err) {
  this.fire('error', err);
};

Loading.prototype._firstLoad = function() {
  this._isLoading = true;
  this._emitStart();

  this.fire('firstLoad', this._finalPromise.promise);
};

Loading.prototype._startWaiting = function(name, promise) {
  // Get promise result (or error)
  promise.then(result => {
    this.done(name, result);
  }).catch(err => {
    this.done(name, err);
  }).finally(() => {
    delete this._promises[name];
    // If all promises are resolved or rejected, we're done loading.
    if(Object.keys(this._promises).length === 0) {
      this._finishLoading();
    }
  });
};

Loading.prototype._finishLoading = function() {
  if(Object.keys(this._loadErrors).length > 0) {
    this._finalPromise.reject(this._loadErrors);
    this._emitError(new Err({message: "Error loading.", errorMap: this._loadErrors}));
  } else {
    this._finalPromise.resolve(this._loaded);
    this._emitDone(this._loaded);
  }

  this._isLoading = false;
  this._promises = {};

  this._resetFinalPromise();
};

module.exports = Loading;
