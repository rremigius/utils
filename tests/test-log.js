const Log = require('../src/log');

QUnit.module("Log", {
  afterEach() {
    Log.resetInstances();
  }
});

QUnit.test("Log.instance() with name argument creates a child instance from the root instance.", function(assert) {
  let root = Log.root();
  let log = Log.instance('foo');
  assert.equal(root, log.getParent());
});

QUnit.test("Log.instance() without name argument returns root instance.", function(assert) {
  let root = Log.root();
  let log = Log.instance();
  assert.equal(root, log);
});

QUnit.test("Log.prototype.instance() creates child instance that inherits driver and level from closest parent with value set.", function(assert) {
  let grandparent = Log.instance('foo');
  let driver = {
    trace:()=>{},
    log:()=>{},
    info:()=>{},
    warn:()=>{},
    error:()=>{}
  };
  grandparent.setLevel(Log.Level.WARN);
  grandparent.setDriver(driver);
  let parent = grandparent.instance('bar');
  let child = parent.instance('qux');

  assert.equal(child.getLevel(), Log.Level.WARN);
  assert.equal(child.getDriver(), driver);
});

QUnit.test("Log.instance with path as name creates child in hierarchy according to path.", function(assert) {
  let parent = Log.instance('foo');
  let child = Log.instance('foo/bar');
  assert.equal(child.getParent(), parent);
});

QUnit.test("Log.instance with name argument fetches earlier created instance with that name.", function(assert) {
  let log = Log.instance('foo');
  let log2 = Log.instance('foo');
  assert.equal(log, log2);
});

QUnit.test("Log.prototype.log passes arguments to log driver", function(assert) {
  let log = Log.instance("foo");
  log.setDriver({
    log:()=>{
      assert.ok(!find([123, 'abc'], value => !includes(arguments, value)), "All arguments passed to driver.");
    },
  });
  log.log(123, 'abc');
});

QUnit.test("Log.instance with path can return same instance as calling instance on an instance.", function(assert) {
  let foobar1 = Log.instance("foo/bar");
  let foobar2 = Log.instance("foo").instance("bar");

  let barfoo1 = Log.instance("bar").instance("foo");
  let barfoo2 = Log.instance("bar/foo");

  assert.equal(foobar1, foobar2, "instance('foo').instance('bar') and instance('foo/bar') (in that order) return the same.");
  assert.equal(barfoo1, barfoo2, "instance('bar/foo') and instance('bar').instance('foo') (in that order) return the same.");
});

QUnit.test("Log.instance with same name but different parent does not return the same.", function(assert) {
  let foo1 = Log.instance("foo");
  let foo2 = Log.instance("bar/foo");
  let foo3 = Log.instance("foo/foo");

  assert.notEqual(foo1, foo2, "Instance foo not equal to bar/foo.");
  assert.notEqual(foo2, foo3, "Instance bar/foo not equal to foo/foo.");
  assert.notEqual(foo3, foo1, "Instance foo/foo not equal to foo.");
});

QUnit.test("Log.getPath() returns the names of its ancestors as path.", function(assert) {
  let log = Log.instance('foo').instance('bar').instance('qux');
  assert.deepEqual(log.getPath(), ['foo', 'bar', 'qux']);
});
