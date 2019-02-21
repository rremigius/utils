const Log = require('../src/log');

QUnit.module("Log");

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
  grandparent.setLevel(Log.Level.WARN);
  let parent = grandparent.instance('bar');
  let child = parent.instance('qux');

  assert.equal(child.getLevel(), grandparent.getLevel());
  assert.equal(child.getDriver(), grandparent.getDriver());
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

QUnit.test("Log.instance with path as name argument creates hierarchy of instances.", function(assert) {
  Log.instance('foo/bar/qux');
  assert.ok(Log._instances['foo'] instanceof Log, 'foo set');
  assert.ok(Log._instances['foo/bar'] instanceof Log, 'foo/bar set');
  assert.ok(Log._instances['foo/bar/qux'] instanceof Log, 'foo/bar/qux set');
});
