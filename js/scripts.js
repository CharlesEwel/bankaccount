/*This file is for your custom js.  All yours*/
// business rules

function Account (name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.transfer = function(integer, deposit) {
    this.balance += deposit * integer;
}





// Calls input from form-input.html

$(document).ready(function(){

  var accountRegistry = [];

  $("#account-register").submit(function(event){
    event.preventDefault();
    var accountholderName = ($("#name-accountholder").val());
    var balance = parseInt($("#deposit-initial").val());
    var newAccount = new Account(accountholderName, balance)
    accountRegistry.push(newAccount);
    $('#balance-current').text(newAccount.balance);
  });

  $("#deposit-withdrawal").submit(function (event) {
    event.preventDefault();
    currentAccount=accountRegistry[0];
    var amount = parseInt($("input#withdraw-deposit-amount").val());
    var deposit = parseInt($("input:radio[name=withdraw-deposit]:checked").val());
    currentAccount.transfer(amount, deposit);
    $('#balance-current').text(currentAccount.balance);
  })
});
