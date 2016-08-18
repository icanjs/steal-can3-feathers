import QUnit from 'steal-qunit';
import { ViewModel } from './account-list';

// ViewModel unit tests
QUnit.module('example-app/account-list');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the account-list component');
});
