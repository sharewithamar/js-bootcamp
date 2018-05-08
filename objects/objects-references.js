let myAccount = {
    name: 'Amar',
    expenses: 0,
    income: 0

}

let otherAccount = myAccount;

otherAccount.income = 1000;

let addExpense = function (account, amount) {
    //  account = {}
    account.expenses += amount;
    console.log(account)
}

addExpense(myAccount, 100)
console.log(myAccount)