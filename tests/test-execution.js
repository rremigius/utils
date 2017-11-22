const Utils = require('../src/utils/execution');
const TestUtils = require('./qunit-test-utils');

QUnit.module("Execution");

QUnit.test("Utils.execAsync executes several functions in serial and maps the results.", function(assert) {
	var done = TestUtils.async(assert, 1000);

	var order = '';
	var steps = {
		'foo': function() {
			var deferred = Utils.Deferred();
			setTimeout(function(){
				order += 'A';
				deferred.resolve();
			}, 100);
			return deferred.promise();
		},
		'bar': function(results) {
			order += 'B';
			return;
		}
	};
	Utils.execAsync(steps)
		.done(function() {
			assert.equal(order, 'AB');
			done();
		})
		.fail(function(err) {
			assert.ok(false);
			done();
		});
});