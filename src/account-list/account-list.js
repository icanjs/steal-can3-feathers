import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './account-list.less';
import template from './account-list.stache';
import Account from 'example-app/models/account';

export const ViewModel = DefineMap.extend({
  allAccounts: {
    Type: Account.List,
    value: []
  },
  checkingAccounts: {
    Type: Account.List,
    value: [],
    get(){
      return this.allAccounts.filter(account => account.type === 'Checking');
    }
  },
  savingsAccounts: {
    Type: Account.List,
    value: [],
    get(){
      return this.allAccounts.filter(account => account.type === 'Savings');
    }
  },
  loanAccounts: {
    Type: Account.List,
    value: [],
    get(){
      return this.allAccounts.filter(account => account.type === 'Loan');
    }
  },
  account: {
    Type: Account,
    value: {
      name: '',
      type: 'Checking'
    }
  },
  accountTypes: {
    value: [
      {name: 'Checking'},
      {name: 'Savings'},
      {name: 'Loan'}
    ]
  },
  edit(account){
    this.account = account;
  },
  reset(){
    this.account = {
      name: '',
      type: 'Checking'
    };
  },
  save(newAccount){
  newAccount.save().then(() => {
      this.reset();
    });
  },
  setupObservables(){
    Account.find({$sort:{'name': 1}}).subscribe(response => {
      this.allAccounts.replace(response.data);
      return response;
    });
  }
});

export default Component.extend({
  tag: 'account-list',
  ViewModel: ViewModel,
  template,
  events: {
    init(){
      this.viewModel.setupObservables();
    }
  }
});
