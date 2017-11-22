const Utils = require('../src/utils/validation');
const TestUtils = require('./qunit-test-utils');
const _ = require('lodash');

QUnit.module("Validation");

QUnit.test("Utils.instanceof checks whether the given argument is an instanceof the given class.", function(assert) {
    var Bar = function(){};
    assert.ok(Utils.instanceof(Bar, new Bar()));
});

QUnit.test("Utils.instanceof with one argument returns a single-argument function that checks whether the argument is an instance of the previously given class.", function(assert) {
    var Bar = function() {};
    var func = Utils.instanceof(Bar);
    assert.ok(func(new Bar()));
});

QUnit.test("Utils.validateOne with boolean as method returns Validity object with isValid() set to that boolean.", function(assert) {
    var valid = Utils.validateOne('foo', 1, true);
    var invalid = Utils.validateOne('foo', 1, false);

    assert.ok(valid instanceof Utils.Validity);
    assert.equal(valid.getName(), 'foo');
    assert.equal(valid.isValid(), true);
    assert.equal(valid.getValue(), 1);
    assert.equal(valid.getMessage(), undefined);

    assert.ok(invalid instanceof Utils.Validity);
    assert.equal(invalid.getName(), 'foo');
    assert.equal(invalid.isValid(), false);
    assert.equal(invalid.getValue(), undefined);
    assert.notEqual(invalid.getMessage(), undefined);
});

QUnit.test("Utils.validateOne with function as method calls the function to validate input and returns Validity object.", function(assert) {
    var __checkTrue = function(val) {
        assert.equal(val, 1);
        return true;
    };
    var __checkFalse = function(val) {
        assert.equal(val, 1);
        return false;
    };

    var valid = Utils.validateOne('foo', 1, __checkTrue);
    var invalid = Utils.validateOne('foo', 1, __checkFalse);

    assert.ok(valid instanceof Utils.Validity);
    assert.equal(valid.getName(), 'foo');
    assert.equal(valid.isValid(), true);
    assert.equal(valid.getMessage(), undefined);
    assert.equal(valid.getValue(), 1);

    assert.ok(invalid instanceof Utils.Validity);
    assert.equal(invalid.getName(), 'foo');
    assert.equal(invalid.isValid(), false);
    assert.notEqual(invalid.getMessage(), undefined);
    assert.equal(invalid.getValue(), undefined);
});

QUnit.test("Utils.validateOne with Validity object as method uses the validity's isValid state for its own isValid state.", function(assert) {
    var validValidity = new Utils.Validity('foo', 1, true, "FooMessage");
    var invalidValidity = new Utils.Validity('foo', 1, false, "FooMessage");

    var valid = Utils.validateOne('foo', 1, validValidity);
    var invalid = Utils.validateOne('foo', 1, invalidValidity);

    assert.ok(valid instanceof Utils.Validity);
    assert.equal(valid.getName(), 'foo');
    assert.equal(valid.isValid(), true);
    assert.equal(valid.getMessage(), undefined);
    assert.equal(valid.getValue(), 1);

    assert.ok(invalid instanceof Utils.Validity);
    assert.equal(invalid.getName(), 'foo');
    assert.equal(invalid.isValid(), false);
    assert.equal(invalid.getMessage(), 'FooMessage');
    assert.equal(invalid.getValue(), undefined);
});

QUnit.test("Utils.validateOne with string as method uses the Utils[method] function to validate the given value.", function(assert) {
    var __checkTrue = function(value) {
        assert.equal(value, 1);
        return true;
    };
    var __checkFalse = function(value) {
        assert.equal(value, 1);
        return false;
    };

	var UtilsClone = _.cloneDeep(Utils);
	UtilsClone.setValidationMethod('checkTrue', __checkTrue);
	UtilsClone.setValidationMethod('checkFalse', __checkFalse);

    var valid = UtilsClone.validateOne('foo', 1, 'checkTrue');
    var invalid = UtilsClone.validateOne('foo', 1, 'checkFalse');

    assert.ok(valid instanceof Utils.Validity);
    assert.equal(valid.getName(), 'foo');
    assert.equal(valid.isValid(), true);
    assert.equal(valid.getMessage(), undefined);
    assert.equal(valid.getValue(), 1);

    assert.ok(invalid instanceof Utils.Validity);
    assert.equal(invalid.getName(), 'foo');
    assert.equal(invalid.isValid(), false);
    assert.notEqual(invalid.getMessage(), undefined);
    assert.equal(invalid.getValue(), undefined);

    TestUtils.resetReplacedMethods();
});

QUnit.test("Utils.validateOne with object as method calls validateObject to validate the given value.", function(assert) {
    var value = {a: 1};
    var valid = Utils.validateOne('foo', value, {a: ['isNumber']});
    var invalid = Utils.validateOne('foo', value, {a: ['isString']});

    var map = invalid.getValidityMap();

    assert.equal(valid.isValid(), true);

    assert.equal(invalid.isValid(), false);
    assert.equal(map.a.isValid(), false);
});

QUnit.test("Utils.validateOne with array as method calls validateArray to validate the given value.", function(assert) {
    var value = [1,2,3];
    var valid = Utils.validateOne('foo', value, ['isNumber']);
    var invalid = Utils.validateOne('foo', value, ['isString']);

    var map = invalid.getValidityMap();

    assert.equal(valid.isValid(), true);
    assert.equal(invalid.isValid(), false);
    assert.equal(map[0].isValid(), false);
    assert.equal(map[1].isValid(), false);
    assert.equal(map[2].isValid(), false);
});

QUnit.test("Utils.validateOne with message sets the given message in the Validity object, only if the value was invalid.", function(assert) {
    var valid = Utils.validateOne('foo', 1, true, 'FooMessage');
    var invalid = Utils.validateOne('foo', 1, false, 'FooMessage');

    assert.equal(valid.isValid(), true);
    assert.equal(valid.getMessage(), undefined);
    assert.equal(invalid.isValid(), false);
    assert.equal(invalid.getMessage(), 'FooMessage');
});

QUnit.test("Utils.validateOne with option.default results in valid, corrected value in returned Validity object.", function(assert) {
    var valid = Utils.validateOne('foo', 1, true, 'FooMessage', {default: 0});
    var invalid = Utils.validateOne('foo', 1, false, 'FooMessage', {default: 0});

    assert.equal(valid.isValid(), true);
    assert.equal(valid.getMessage(), undefined);
    assert.equal(valid.getValue(), 1);
    assert.equal(valid.isCorrected(), false);

    assert.equal(invalid.isValid(), true);
    assert.equal(invalid.getMessage(), 'FooMessage');
    assert.equal(invalid.getValue(), 0);
    assert.equal(invalid.isCorrected(), true);
});

QUnit.test("Utils.validateOne with option.default and option.warn=false suppresses warning message when value is corrected.", function(assert) {
    var invalid1 = Utils.validateOne('foo', 1, false, 'FooMessage', {default: 0});
    var invalid2 = Utils.validateOne('foo', 1, false, 'FooMessage', {default: 0, warn: false});

    assert.equal(invalid1.isValid(), true);
    assert.equal(invalid1.getMessage(), 'FooMessage');
    assert.equal(invalid1.isCorrected(), true);
    assert.equal(invalid2.isValid(), true);
    assert.equal(invalid2.getMessage(), undefined);
    assert.equal(invalid2.isCorrected(), true);
});

QUnit.test("Utils.validateOne with functions for default/warn executes those functions to evaluate those settings.", function(assert) {
    var __default = function(val) {
        assert.equal(val,1);
        return 0;
    };
    var __warnTrue = function(val) {
        assert.equal(val, 1);
        return true;
    };
    var __warnFalse = function(val) {
        assert.equal(val, 1);
        return false;
    };
    var invalid1 = Utils.validateOne('foo', 1, false, 'FooMessage', {default: __default, warn: __warnTrue});
    var invalid2 = Utils.validateOne('foo', 1, false, 'FooMessage', {default: __default, warn: __warnFalse});

    assert.equal(invalid1.isValid(), true);
    assert.equal(invalid1.getMessage(), 'FooMessage');
    assert.equal(invalid2.isValid(), true);
    assert.equal(invalid2.getMessage(), undefined);
});

QUnit.test("Utils.validate executes validateOne for each key-value pair and returns a combined Validity object.", function(assert) {
    var valid = Utils.validate('foo', {
        v1: [1, 'isNumber'],
        v2: ['foo', 'isString']
    });
    var invalid = Utils.validate('bar', {
        v1: [1, 'isNumber'],
        v2: ['foo', 'isNumber']
    });

    assert.equal(valid.isValid(), true);
    assert.equal(invalid.isValid(), false);

    var validityMap1 = valid.getValidityMap();
    assert.equal(validityMap1['v1'].isValid(), true);
    assert.equal(validityMap1['v2'].isValid(), true);

    var validityMap2 = invalid.getValidityMap();
    assert.equal(validityMap2['v1'].isValid(), true);
    assert.equal(validityMap2['v2'].isValid(), false);
    assert.equal(validityMap2['v1'].getMessage(), undefined);
    assert.equal(validityMap2['v2'].getMessage(), "Must be number.");
});

QUnit.test("Utils.validateObject validates each specified key-value pair in an object.", function(assert) {
    var Bar = function() {};
    var obj = {
        abc: 1,
        bar: new Bar(),
        qux: [1,2,3]
    };
    var valid1 = Utils.validateObject("x", obj, {
        abc: 'isNumber',
        bar: [Utils.instanceof(Bar), "BarMessage"]
    });
    var valid2 = Utils.validateObject("y", obj, {
        abc: 'isString'
    });

    var validityMap1 = valid1.getValidityMap();

    var valid3 = Utils.validateObject('z', obj, {
       abc: ['isString', {default: 'foo'}]
    });

    assert.equal(valid1.isValid(), true);
    assert.equal(valid1.getMessage(), undefined);
    assert.notOk('qux' in validityMap1);

    assert.equal(valid2.isValid(), false);
    assert.ok(_.isString(valid2.getMessage()));

    assert.equal(valid3.isValid(), true);
    assert.equal(valid3.isCorrected(), true);
    assert.deepEqual(valid3.getValue(), {
        abc: 'foo',
        bar: new Bar(),
        qux: [1,2,3]
    });
});
QUnit.test("Utils.validateObject returns invalid validity object if one of the checked properties is invalid.", function(assert) {
	var obj = {
		a: 'x',
		b: 'y'
	};
	var check = Utils.validateObject('x', obj, {
		a: ['isString'],
		b: ['isNumber']
	});
	assert.equal(check.isValid(), false);
});
QUnit.test("Utils.validateObject with option 'optionalProperties' skips and omits missing properties from validation.", function(assert) {
	var obj = {
		a: 'x'
	};
	var check = Utils.validateObject(obj, {
		a: 'isString',
		b: 'isString'
	}, {optionalProperties: true});
	assert.ok('a' in check.getValue());
	assert.notOk('b' in check.getValue());
});

QUnit.test("Utils.validateArray validates each item in an array.", function(assert) {
    var arr1 = [1,2,3];
    var valid1 = Utils.validateArray('arr1', arr1, ['isNumber']);
    var invalid1 = Utils.validateArray('arr1', arr1, ['isString', "Arr1Message"]);

    var Bar = function(){};
    var x = new Bar(), y = new Bar();
    var arr2 = [x, y];
    var valid2 = Utils.validateArray('arr2', arr2, [Utils.instanceof(Bar), "Arr2Message"]);
    var invalid2 = Utils.validateArray('arr2', arr2, 'isString');

    var arr3 = [1, 'a', 3];
    var valid3 = Utils.validateArray('arr3', arr3, ['isNumber', {default: 0, warn: true}]);

    assert.equal(valid1.isValid(), true);
    assert.equal(invalid1.isValid(), false);
    assert.equal(valid2.isValid(), true);
    assert.equal(invalid2.isValid(), false);

    assert.equal(valid3.isValid(), true);
    assert.equal(valid3.isCorrected(), true);
    assert.deepEqual(valid3.getValue(), [1,0,3]);
});

QUnit.test("Utils.validateArray with minLength and maxLength in options checks if the array is within these dimensions.", function(assert) {
    var arr1 = [1,2,3];
    var valid = Utils.validateArray('arr1', arr1, ['isNumber'], "FooMessage", {minLength: 1, maxLength: 5});
    var invalid1 = Utils.validateArray('arr1', arr1, ['isString'], "FooMessage", {minLength: 4});
	var invalid2 = Utils.validateArray('arr1', arr1, ['isString'], "FooMessage", {minLength: 0, maxLength: 2});

	assert.equal(valid.isValid(), true);

	assert.equal(invalid1.isValid(), false);
	assert.equal(invalid2.isValid(), false);
});

QUnit.test("Utils.validate calls callback after validation.", function(assert) {
    var done = TestUtils.async(assert, 1000);
    assert.expect(1);

    Utils.validate('foo', {
        a: [1, 'isNumber']
    }, "SomeConsequence", function(valid) {
        assert.ok(valid instanceof Utils.Validity);
        done();
    });
});

QUnit.test("Utils.validateObject calls callback after validation.", function(assert) {
    var done = TestUtils.async(assert, 1000);
    assert.expect(1);

    Utils.validateObject('foo', {
        a: 1
    }, {
        a: ['isNumber']
    }, "SomeConsequence", function(valid) {
        assert.ok(valid instanceof Utils.Validity);
        done();
    });
});

QUnit.test("Utils.validateArray calls callback after validation.", function(assert) {
    var done = TestUtils.async(assert, 1000);
    assert.expect(1);

    Utils.validateArray('foo', [1,2,3], ['isNumber'], {}, function(valid) {
        assert.ok(valid instanceof Utils.Validity);
        done();
    });
});

QUnit.test("Utils.validateObject can be called without a name.", function(assert) {
    var obj = {a:1};
    var check = Utils.validateObject(obj, {a:true});

    assert.ok(check instanceof Utils.Validity);
    assert.equal(check.isValid(), true);
});

QUnit.test("Utils.validateArray can be called without a name.", function(assert) {
    var arr = [1,2,3];
    var check = Utils.validateArray(arr, true);

    assert.ok(check instanceof Utils.Validity);
    assert.equal(check.isValid(), true);
});

QUnit.test("Utils.validateArray can be called without a message.", function(assert) {
	var arr = [1,2,3];
	var check = Utils.validateArray('arr', arr, ['isString'], {minLength: 0, maxLength: 2});

	assert.ok(check instanceof Utils.Validity);
	assert.equal(check.isValid(), false);
});

QUnit.test("Utils.validate can be called without a name.", function(assert) {
    var check = Utils.validate({
        a: [1, true]
    });

    assert.ok(check instanceof Utils.Validity);
    assert.equal(check.isValid(), true);
});

QUnit.test("Utils.validateOne can be called without a message.", function(assert) {
    var check = Utils.validateOne('foo', 1, false, {default: 0});
    assert.ok(check instanceof Utils.Validity);
    assert.equal(check.isValid(), true);
});

QUnit.test("Utils.def returns false for null and undefined values, and true otherwise.", function(assert) {
    assert.equal(Utils.def(undefined), false);
    assert.equal(Utils.def(null), false);
    assert.equal(Utils.def(0), true);
    assert.equal(Utils.def(false), true);
    assert.equal(Utils.def({}), true);
    assert.equal(Utils.def([]), true);
    assert.equal(Utils.def(""), true);
});

QUnit.test("Utils.ensure returns the given value if it matches the given condition, or a given default otheriwse.", function(assert) {
	var val1 = {a:'foo'};
	var val2 = 'foo';
	var sure1 = Utils.ensure(val1, _.isObject, {});
	var sure2 = Utils.ensure(val2, _.isObject, {});
	assert.equal(sure1, val1);
	assert.notEqual(sure2, val2);
	assert.deepEqual(sure2, {});
});

QUnit.test("Utils.ensurePath creates a value at the given path if the current value at that path does not match the given condition.", function(assert) {
	var obj1 = {
		a: 'foo',
		b: {
			c: 'bar'
		}
	};
	var obj2 = {
		a: 'foo',
		b: {
			c: 123
		}
	};
	var obj3 = {
		a: 'foo'
	};

	Utils.ensurePath(obj1, 'b.c', _.isNumber, 0);
	Utils.ensurePath(obj2, 'b.c', _.isNumber, 0);
	Utils.ensurePath(obj3, 'b.c', _.isNumber, 0);

	assert.equal(obj1.b.c, 0);
	assert.equal(obj2.b.c, 123);
	assert.equal(obj3.b.c, 0);
});

QUnit.test("Utils.isStringOrNumber returns true for all strings and numbers, false for other values.", function(assert) {
	assert.equal(Utils.isStringOrNumber('foo'), true);
	assert.equal(Utils.isStringOrNumber(123), true);
	assert.equal(Utils.isStringOrNumber(undefined), false);
	assert.equal(Utils.isStringOrNumber(null), false);
	assert.equal(Utils.isStringOrNumber({}), false);
	assert.equal(Utils.isStringOrNumber([]), false);
	assert.equal(Utils.isStringOrNumber(function(){}), false);
});
