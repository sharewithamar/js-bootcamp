const account = {
    name: 'Amar',
    expenses: [],
    income: [],
    addIncome(description, amount) {
        this.income.push({ description, amount })

    },
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount })

    },
    getAccountSummary() {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach((expense) => totalExpenses += expense.amount)
        this.income.forEach((income) => totalIncome += income.amount)

        return `${this.name} has a balance of $${totalIncome - totalExpenses}.$${totalIncome} in income. $${totalExpenses} in expenses.`

    }
}

//Expense - > description, amount
//addExpense
account.addExpense('HouseRent', 22000)
account.addExpense('Furniture', 8000)
account.addIncome('salary', 100000)
console.log(account.getAccountSummary())
//getAccountSummary -> total up all expenses -> Amar has $1250 in expenses

//1. add income array to account 
 //2 .addIncome method -> description,amount
 //3.Tweat getAccountSummary 
 //Amar has a balance of $10. $100 in income . $90 i expenses