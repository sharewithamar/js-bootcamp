
//assigning an object to another varible or modifying the properties of a passed object refrers to the same object
//If you assign with new object creation then both object entitites are different
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
    //console.log(account)
}


//addIncome

let addIncome = function (account, income) {
    account.income += income;
}


//resetAccount 

let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;

}

resetAccount(myAccount)
console.log(myAccount)

console.log(myAccount)

//getAccountSummary- Account for Amar has $900 . $1000 in income $100 in expenses.
let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income $${account.expenses} in expenses`
}

addIncome(myAccount, 500)
addIncome(myAccount, 500)
addExpense(myAccount, 100)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)

console.log(getAccountSummary(myAccount))
