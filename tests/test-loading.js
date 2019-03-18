const TestUtils = require('./qunit-test-utils');
const Loading = require('../src/loading');

QUnit.module("Loading");

QUnit.test("Loading.isLoading returns false if nothing is loading.", function(assert) {
  let loading = new Loading();
  assert.notOk(loading.isLoading());
});

QUnit.test("Loading.isFinished returns false if nothing was loaded.", function(assert) {
  let loading = new Loading();
  assert.notOk(loading.isFinished());
});

QUnit.test("Loading.start makes Loading.isLoading() return true.", async function(assert) {
  let loading = new Loading();
  loading.start("foo");
  assert.ok(loading.isLoading(), "isLoading() returns true");
});

QUnit.test("Loading.isFinished returns true after Loading.done() was called.", function(assert) {
  let loading = new Loading();
  loading.start("foo");
  loading.done("foo");
  assert.ok(loading.isFinished("foo"), "isFinished() returns true");
});

QUnit.test("Loading.done with name argument resolves the promise returned by Loading.start() with the same name.", async function(assert) {
  let loading = new Loading();
  let promise = loading.start('foo');
  promise.then(result => assert.equal(result, 'bar'));
  loading.done('foo', 'bar');

  return promise;
});

QUnit.test("Loading.wait with name argument returns promise that resolves when task with that name was completed.", async function(assert) {
  let loading = new Loading();
  loading.start("foo");
  loading.done('foo', 'bar');

  let result = await loading.wait('foo');
  assert.equal(result, 'bar');
});

QUnit.test("Loading.wait without name argument returns promise that resolves when all tasks are completed.", async function(assert) {
  let loading = new Loading();
  loading.start('foo');
  loading.start('bar');

  loading.done('foo', 123);
  loading.done('bar', 321);

  let result = await loading.wait();
  assert.deepEqual(result, {
    foo: 123,
    bar: 321
  });
});

QUnit.test("Loading.start with promise argument resolves automatically when promise is resolved.", async function(assert) {
  let loading = new Loading();
  loading.start('foo', 100, new Promise(resolve => {
    setTimeout(() => {
      resolve('bar');
    });
  }));
  let result = await loading.wait('foo');
  assert.equal(result, 'bar');
  assert.ok(loading.isFinished('foo'), "isFinished returns true");
  assert.ok(loading.isLoading('foo'), "isLoading returns false");
});

QUnit.test("Loading.error rejects promise and finishes loading.", async function(assert) {
  let loading = new Loading();
  loading.start('foo');
  loading.error('foo', new Error('bar'));
  try {
    await loading.wait('foo');
    assert.ok(false, "Promise should not resolve.");
  } catch(e) {
    assert.equal(e.message, 'bar');
    assert.ok(loading.isFinished('foo'));
  }
});

QUnit.test("Loading.error rejects final promise with error map.", async function(assert) {
  let loading = new Loading();
  loading.start('foo');
  loading.start('bar');
  loading.done('foo', 123);
  loading.error('bar', new Error('abc'));
  try {
    await loading.wait();
    assert.ok(false, "Final promise should not resolve.");
  } catch(errorMap) {
    assert.equal(errorMap.bar.message, 'abc', "Error message in error map");
    assert.notOk('foo' in errorMap, 'Foo should not be in error map');
  }
});

QUnit.test("Loading.start with rejecting promise rejects final promise.", async function(assert) {
  let loading = new Loading();
  loading.start('foo', 100, new Promise((resolve, reject) => {
    setTimeout(()=>reject(new Error('bar')));
  }));
  try {
    await loading.wait('foo');
    assert.ok(false, "Promise should not resolve.");
  } catch(error) {
    assert.equal(error.message, 'bar');
  }
});

QUnit.test("Loading.start first call emits 'start' event.", async function(assert) {
  let loading = new Loading();
  let alreadyCalled = false;
  loading.on('start', ()=>{
    assert.notOk(alreadyCalled, 'Called only one time.');
    alreadyCalled = true;
  });
  loading.start('foo');
});

QUnit.test("Loading.wait before start should not resolve immediately.", async function(assert) {
  let loading = new Loading();
  let started = false;
  loading.wait()
    .then(()=>{
      assert.ok(started, "Loading.wait resolved after start.");
    });

  loading.start('foo', 100, new Promise(resolve =>
    setTimeout(()=>resolve())
  ));
  started = true;
});
