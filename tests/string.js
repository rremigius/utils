QUnit.module("String");

QUnit.test("Utils.valueToString prints a string of a value that has a maximum length as specified.", function(assert) {
	assert.equal(Utils.valueToString("123", 1), '"');
	assert.equal(Utils.valueToString("123", 2), '""');
	assert.equal(Utils.valueToString("123", 5), '"123"');
	assert.equal(Utils.valueToString("123456", 5), '"..."');
	assert.equal(Utils.valueToString("123456", 7), '"12..."');

	assert.equal(Utils.valueToString(true, 1), 't');
	assert.equal(Utils.valueToString(true, 5),'true');
	assert.equal(Utils.valueToString(false, 1), 'f');
	assert.equal(Utils.valueToString(false, 5),'false');
});

QUnit.test("Utils.numberToString prints a string of a number that has a maximum length as specified.", function(assert) {
	assert.equal(Utils.valueToString(1, 1), '1');
	assert.equal(Utils.valueToString(12, 2), '12');
	assert.equal(Utils.valueToString(123, 3), '123');
	assert.equal(Utils.valueToString(123, 4), '123');
	assert.equal(Utils.valueToString(123.456789, 1), '.');
	assert.equal(Utils.valueToString(123.456789, 2), '..');
	assert.equal(Utils.valueToString(123.456879, 3), '...');
	assert.equal(Utils.valueToString(123.456789, 5), '1e+2');
	assert.equal(Utils.valueToString(123.456789, 7), '1.23e+2');
	assert.equal(Utils.valueToString(123.456789, 9), '1.2346e+2');
	assert.equal(Utils.valueToString(123456789012345678901234567890, 4), '...');
	assert.equal(Utils.valueToString(123456789012345678901234567890, 5), '1e+29');
});

QUnit.test("Utils.arrayToString prints a string of an array that has a maximum length as specified.", function(assert) {
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 1), '[');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 2), '[]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 3), '[.]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 5), '[...]');
	assert.equal(Utils.arrayToString([], 5), '[]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 7), '[...]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 11), '["foo",...]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 19), '["foo","lo...",...]');
});

QUnit.test("Utils.objectToString prints a string of an object that has a maximum length as specified.", function(assert) {
	assert.equal(Utils.objectToString({abc: "foo", def: "longervalue"}, 23), '{abc:"foo",def:"lo..."}');
	assert.equal(Utils.objectToString({abc: "foo", def: "longervalue"}, 1), '{');
	assert.equal(Utils.objectToString({abc: "foo", def: "longervalue"}, 2), '{}');
	assert.equal(Utils.objectToString({abc: "foo", def: "longervalue"}, 3), '{.}');
	assert.equal(Utils.objectToString({abc: "foo", def: "longervalue"}, 5), '{...}');
	assert.equal(Utils.objectToString({}, 5), '{}');
	assert.equal(Utils.objectToString({abc: "foo", def: "longervalue"}, 11), '{...}');
	assert.equal(Utils.objectToString({abc: "foo", def: "longervalue"}, 15), '{abc:"foo",...}');
});