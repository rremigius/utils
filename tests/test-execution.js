const Utils = require('../src/execution');
const TestUtils = require('./qunit-test-utils');

QUnit.module("Execution");

QUnit.test("Utils.synchronize executes several functions in serial and maps the results.", function(assert) {
	var done = TestUtils.async(assert, 1000);

	var order = '';
	var steps = {
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
