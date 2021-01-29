QUnit.module("Error");

const Err = require('../src/error');

QUnit.test("Error.getPublicInfo recalculates `cause` based on deepest public error in hierarchy.", function (assert) {
	const err = new Err({
		message: "foo-public",
		public: true,
		originalError: new Err({
			message: 'bar-public',
			public: true,
			originalError: new Err({
				message: 'qux-private'
			})
		})
	});
	assert.equal(err.cause, "qux-private");

	const publicErr = err.getPublicInfo();
	assert.equal(publicErr.cause, 'bar-public');
});
