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

QUnit.test("Utils.validateOne options.", function(assert) {
    var __checkTrue = function(val) {
        assert.equal(val, 1);
        return true;
    };
    var __default0 = function(val) {
        assert.equal(val, 1);
        return 0;
    };
    var valid1 = Utils.validateOne('foo', 1, __checkTrue, "FooMessage");
    var valid2 = Utils.validateOne('foo', 1, 'isNumber');
    var valid3 = Utils.validateOne('foo', 1, 'isString');
    var valid4 = Utils.validateOne('foo', 1, 'isString', {default: 0, warn: false});
    var valid5 = Utils.validateOne('foo', 1, 'isString', "FooMessage", {default: __default0, warn: __checkTrue});
    var valid6 = Utils.validateOne('foo', {a: 1}, {a: ['isNumber']}, "FooMessage");
    var valid7 = Utils.validateOne('foo', [1,2,3], ['isNumber']);

    assert.equal(valid1.getName(), 'foo');

    assert.ok(valid1 instanceof Utils.Validity);
    assert.ok(valid2 instanceof Utils.Validity);
    assert.ok(valid3 instanceof Utils.Validity);
    assert.ok(valid4 instanceof Utils.Validity);
    assert.ok(valid5 instanceof Utils.Validity);
    assert.ok(valid6 instanceof Utils.Validity);
    assert.ok(valid7 instanceof Utils.Validity);

    assert.equal(valid1.isValid(), true);
    assert.equal(valid2.isValid(), true);
    assert.equal(valid3.isValid(), false);
    assert.equal(valid4.isValid(), true);
    assert.equal(valid5.isValid(), true);
    assert.equal(valid6.isValid(), true, "Method is an object, value gets evaluated by validateObject.");
    assert.equal(valid7.isValid(), true, "Method is an array, value gets evaluated by validateArray.");

    assert.equal(valid1.getMessage(), undefined);
    assert.equal(valid2.getMessage(), undefined);
    assert.equal(valid3.getMessage(), "Must be string.");
    assert.equal(valid4.getMessage(), undefined);
    assert.equal(valid5.getMessage(), "FooMessage");
    assert.equal(valid5.getMessage(), "FooMessage");
    assert.equal(valid6.getMessage(), undefined);
    assert.equal(valid7.getMessage(), undefined);

    assert.equal(valid1.getValue(), 1);
    assert.equal(valid2.getValue(), 1);
    assert.equal(valid3.getValue(), undefined);
    assert.equal(valid4.getValue(), 0);
    assert.equal(valid5.getValue(), 0);
    assert.deepEqual(valid6.getValue(), {a:1});
    assert.deepEqual(valid7.getValue(), [1,2,3]);
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
    }, "XMessage");
    var valid2 = Utils.validateObject("y", obj, {
        abc: 'isString'
    }, "YMessage.");

    var validityMap1 = valid1.getValidityMap();

    var valid3 = Utils.validateObject('z', obj, {
       abc: ['isString', {default: 'foo'}]
    });

    assert.equal(valid1.isValid(), true);
    assert.equal(valid1.getMessage(), undefined);
    assert.notOk('qux' in validityMap1);

    assert.equal(valid2.isValid(), false);
    assert.equal(valid2.getMessage(), "Invalid object for 'y'. YMessage.");

    assert.equal(valid3.isValid(), true);
    assert.equal(valid3.isCorrected(), true);
    assert.deepEqual(valid3.getValue(), {
        abc: 'foo',
        bar: new Bar(),
        qux: [1,2,3]
    });
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