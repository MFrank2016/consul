import getFilter from 'consul-ui/search/filters/node';
import { module, test } from 'qunit';

module('Unit | Search | Filter | node', function() {
  const filter = getFilter(cb => cb);
  test('items are found by properties', function(assert) {
    [
      {
        Node: 'node-HIT',
        Address: '10.0.0.0',
      },
    ].forEach(function(item) {
      const actual = filter(item, {
        s: 'hit',
      });
      assert.ok(actual);
    });
  });
  test('items are not found', function(assert) {
    [
      {
        Node: 'name',
        Address: '10.0.0.0',
      },
    ].forEach(function(item) {
      const actual = filter(item, {
        s: 'hit',
      });
      assert.notOk(actual);
    });
  });
});
