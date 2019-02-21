const Utils = require('../src/execution');
const TestUtils = require('./qunit-test-utils');

QUnit.module("Execution");

QUnit.test("Utils.synchronize executes several functions in serial and maps the results.", function(assert) {
	let done = TestUtils.async(assert, 1000);

	let order = '';
	let steps = {
		'foo': function() {
			return new Promise((resolve, reject) => {
				setTimeout(function(){
					order += 'A';
					resolve();
				}, 100);
			});
		},
		'bar': function() {
			order += 'B';
			return order;
		},
		'deferredFooBar': function(results) {
		  return new Promise((resolve, reject) => {
		    resolve(results + 'C');
      });
		}
	};
	Utils.synchronize(steps)
		.then(function(results) {
			assert.equal(results, 'ABC');
			done();
		})
		.catch(function(err) {
			console.error(err);
			assert.ok(false, "Synchronize succeeded.");
			done();
		});
});

QUnit.test("Utils.waitForAll waits for all promises to resolve.", function(assert) {
  let done = TestUtils.async(assert, 1000);

  let def1 = new Promise((resolve, reject) => resolve('a'));
  let def2 = new Promise((resolve, reject) => resolve('b'));
  let def3 = new Promise((resolve, reject) => resolve('c'));

  let wait = Utils.waitForAll({
    'd1': def1,
    'd2': def2,
    'd3': def3
  });

  wait.then(function(result) {
    assert.deepEqual(result, {
      'd1': 'a',
      'd2': 'b',
      'd3': 'c'
    });
    done();
  });
});

QUnit.test("Utils.waitForAll rejects with error if one of the deferreds fails.", function(assert) {
  let done = TestUtils.async(assert, 1000);
  let def1 = new Promise((resolve, reject) => resolve('a'));
  let def2 = new Promise((resolve, reject) => reject('b'));
  let def3 = new Promise((resolve, reject) => resolve('c'));

  let wait = Utils.waitForAll({
    'd1': def1,
    'd2': def2,
    'd3': def3
  });

  wait.then(function(result) {
    TestUtils.error(assert, "Should not resolve", result);
    done();
  });
  wait.catch(function(err) {
    assert.ok(err instanceof Error, "Failure passes instance of Error.");
    assert.deepEqual(err.errorMap, {
      'd2': 'b'
    }, "Error map contains failing deferred.");
    assert.deepEqual(err.data, {
      'd1': 'a',
      'd3': 'c'
    }, "Error data contains successful data");
    done();
  });
});

QUnit.test("Utils.waitForAll rejects with error if timeout is passed.", function(assert) {
  let done = TestUtils.async(assert, 1000);
  let def1 = new Promise((resolve, reject) => resolve('a'));
  let def2 = new Promise((resolve, reject) => reject('b'));
  let def3 = new Promise((resolve, reject) => {});

  let wait = Utils.waitForAll({
    'd1': def1,
    'd2': def2,
    'd3': def3
  }, 100);

  wait.then(function(result) {
    TestUtils.error(assert, "Should not resolve", result);
    done();
  });
  wait.catch(function(err) {
    assert.ok(err instanceof Error);
    assert.deepEqual(err.data, {
      'd1': 'a'
    });
    assert.ok('d2' in err.errorMap, 'd2 in errorMap');
    assert.ok('d3' in err.errorMap, 'd3 in errorMap');
    done();
  });
});
