import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('example-app functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('example-app main page shows up', function() {
  F('title').text('example-app', 'Title is set');
});
