QUnit.module("Utils");

QUnit.test("Utils.extend adds properties from argument to Utils object.", function (assert) {
    var foo = {
        bar: function() {},
        qux: 'abc'
    };

    Utils.extendUtils(foo);

    assert.ok(typeof(Utils.bar) === 'function');
    assert.equal(Utils.qux, 'abc');
});

QUnit.test("Utils.extend overwrites only properties that are listed in overwrite argument.", function (assert) {
    var foo = {
        bar: 'b',
        qux: 'b'
    };

    var barExists = 'bar' in Utils;
    var quxExists = 'qux' in Utils;

    var originalBar = Utils.bar;
    var originalQux = Utils.qux;
    Utils.bar = 'a';
    Utils.qux = 'b';
    Utils.extendUtils(foo, ['qux']);

    assert.equal(Utils.bar, 'a');
    assert.equal(Utils.qux, 'b');

    Utils.bar = originalBar;
    Utils.qux = originalQux;
    if(!barExists) {
        delete Utils.bar;
    }
    if(!quxExists) {
        delete Utils.qux;
    }
});
