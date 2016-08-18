import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import feathers from './feathers';
import CanService from 'canjs-feathers';

export const Account = DefineMap.extend('Account', {
  seal: false
}, {
  '_id': '*',
  name: {type: 'string'},
  accountNumber: {type: 'string'},

  type: {
    value: 'checking',
    type: 'string'
  }
});

Account.List = DefineList.extend({
  '*': Account,
  limit: 'number',
  skip: 'number',
  total: 'number'
});

new CanService({
  service: feathers.service('accounts'),
  idProp: '_id',
  Map: Account,
  List: Account.List,
  name: 'account',
});

// feathers.on('v1/accounts created', account => accountConnection.createInstance(account));
// feathers.on('v1/accounts updated', account => accountConnection.updateInstance(account));
// feathers.on('v1/accounts patched', account => accountConnection.updateInstance(account));
// feathers.on('v1/accounts removed', account => accountConnection.destroyInstance(account));

export default Account;
