const TestUtils = require('./qunit-test-utils');

QUnit.module("Execution");

QUnit.test("Utils.execAsync executes several functions in serial and maps the results.", function(assert) {
	var done = TestUtils.async(assert, 1000);

	var steps = {
		'foo': function() {
			var deferred = Utils.Deferred();
			setTimeout(function(){
				deferred.resolve(1);
			}, 100);
			return deferred.promise();
		},
		'bar': function(results) {
			return results['foo'] + 2;
		}
	};
	Utils.execAsync(steps)
		.done(function(results) {
			assert.deepEqual(results, {
				'foo': 1,
				'bar': 3
			});
			done();
		})
		.fail(function(err) {
			assert.ok(false);
			done();
		});
});
