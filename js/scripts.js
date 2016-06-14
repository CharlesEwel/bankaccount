/*This file is for your custom js.  All yours*/
// business rules

function Account (name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.transfer = function(integer, deposit) {
    this.balance += deposit * integer;
}

Account.prototype.output = function(nameOnAccount, currentBalance){
  nameOnAccount.text(this.name);
  currentBalance.text(this.balance);
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
    $('#withdraw-deposit-zone').show();
    $("#balance-current").show();
    console.log(accountRegistry.length-1)
    $('#account-selector').append('<option value="'+ accountRegistry.length +'">'+newAccount.name+'</option>');
    newAccount.output($(".name-accountholder"),$('.new-balance'))
  });

  $("#deposit-withdrawal").submit(function (event) {
    event.preventDefault();
    currentAccountIndex=parseInt($("select#account-selector").val());
    currentAccount=accountRegistry[currentAccountIndex-1];
    var amount = parseInt($("input#withdraw-deposit-amount").val());
    var deposit = parseInt($("input:radio[name=withdraw-deposit]:checked").val());
    currentAccount.transfer(amount, deposit);
    currentAccount.output($(".name-accountholder"),$('.new-balance'))
  })
});
