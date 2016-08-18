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
    value: []
  },
  savingsAccounts: {
    Type: Account.List,
    value: []
  },
  loanAccounts: {
    Type: Account.List,
    value: []
  },
  allAccountsPromise: {
    get(){
      return Account.find({}).subscribe(response => {
        this.allAccounts.replace(response.data);
        console.log(this.allAccounts);
        return response.data;
      });
    }
  },
  checkingAccountsPromise: {
    get(){
      return Account.find({type: 'Checking'}).subscribe(response => {
        this.checkingAccounts.replace(response.data);
        return response.data;
      });
    }
  },
  savingsAccountsPromise: {
    get(){
      return Account.find({type: 'Savings'}).subscribe(response => {
        this.savingsAccounts.replace(response.data);
        return response.data;
      });
    }
  },
  loanAccountsPromise: {
    get(){
      return Account.find({type: 'Loan'}).subscribe(response => {
        this.loanAccounts.replace(response.data);
        return response.data;
      });
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
    console.log(account);
  },
  reset(){
    this.account = {
      name: '',
      type: 'Checking'
    };
  },
  save(newAccount){
  newAccount.save().then(() => {
      // this.accounts.push(res);
      this.reset();
    });
  }
});

export default Component.extend({
  tag: 'account-list',
  ViewModel: ViewModel,
  template,
  events: {
    init(){
      console.log('init');
    },
    inserted() {
      console.log('inserted');
    }
  }
});
