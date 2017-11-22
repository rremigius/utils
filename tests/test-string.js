QUnit.module("String");

QUnit.test("Utils.valueToString with boolean or string prints a string of a value that has a maximum length as specified.", function(assert) {
	assert.equal(Utils.valueToString("abc", 1), '"');
	assert.equal(Utils.valueToString("abc", 2), '""');
	assert.equal(Utils.valueToString("abc", 5), '"abc"');
	assert.equal(Utils.valueToString("abcdef", 5), '"..."');
	assert.equal(Utils.valueToString("abcdef", 7), '"ab..."');

	assert.equal(Utils.valueToString(true, 1), 't');
	assert.equal(Utils.valueToString(true, 5),'true');
	assert.equal(Utils.valueToString(false, 1), 'f');
	assert.equal(Utils.valueToString(false, 5),'false');
});

QUnit.test("Utils.numberToString prints a string of a number that has a maximum length as specified.", function(assert) {
	assert.equal(Utils.numberToString(1, 1), '1');
	assert.equal(Utils.numberToString(12, 2), '12');
	assert.equal(Utils.numberToString(123, 3), '123');
	assert.equal(Utils.numberToString(123, 4), '123');
	assert.equal(Utils.numberToString(123.456789, 1), '.');
	assert.equal(Utils.numberToString(123.456789, 2), '..');
	assert.equal(Utils.numberToString(123.456879, 3), '...');
	assert.equal(Utils.numberToString(123.456789, 5), '1e+2');
	assert.equal(Utils.numberToString(123.456789, 7), '1.23e+2');
	assert.equal(Utils.numberToString(123.456789, 9), '1.2346e+2');
	assert.equal(Utils.numberToString(123456789012345678901234567890, 4), '...');
	assert.equal(Utils.numberToString(123456789012345678901234567890, 5), '1e+29');
});

QUnit.test("Utils.arrayToString prints a string of an array that has a maximum length as specified.", function(assert) {
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 1), '[');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 2), '[]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 3), '[.]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 5), '[...]');
	assert.equal(Utils.arrayToString([], 5), '[]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 7), '[...]');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 11), '[...](3)');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 16), '["foo",...](3)');
	assert.equal(Utils.arrayToString(['foo','longervalue','bar'], 22), '["foo","lo...",...](3)');
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

QUnit.test("Utils.valueToString prints a string of any value with a maximum length as specified.", function(assert) {
	assert.equal(Utils.valueToString({abc: "foo", def: "longervalue"}, 15), '{abc:"foo",...}');
	assert.equal(Utils.valueToString(['foo','longervalue','bar'], 22), '["foo","lo...",...](3)');
	assert.equal(Utils.valueToString(123.456789, 9), '1.2346e+2');
	assert.equal(Utils.valueToString(true, 5),'true');
});

QUnit.test("Utils.dotString returns a string with dots of the given length.", function(assert) {
	assert.equal(Utils.dotString(1), '.');
	assert.equal(Utils.dotString(2), '..');
	assert.equal(Utils.dotString(10), '..........');
});

QUnit.test("Utils.capitaliseFirst capitalises the first letter of the given string.", function(assert) {
	assert.equal(Utils.capitaliseFirst("foo"), "Foo");
	assert.equal(Utils.capitaliseFirst("1foo"), "1foo");
});

QUnit.test("Utils.plural returns an English plural form of the given string (for most standard plural forms).", function(assert) {
	assert.equal(Utils.plural("bar"), "bars");
	assert.equal(Utils.plural("guess"), "guesses");
	assert.equal(Utils.plural("radish"), "radishes");
});
