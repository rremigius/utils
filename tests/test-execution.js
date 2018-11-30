const $ = require('jquery');
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
			return deferred.promise();
		},
		'bar': function() {
			order += 'B';
			return order;
		},
		'deferredFooBar': function(results) {
			let deferred = new $.Deferred();
			deferred.resolve(results + 'C');
			return deferred.promise();
		}
	};
	Utils.synchronize(steps)
		.done(function(results) {
			assert.equal(results, 'ABC');
			done();
		})
		.fail(function(err) {
			console.error(err);
			assert.ok(false, "Synchronize succeeded.");
			done();
		});
});
