import React from 'react'

 export const addExpense = (data) => {
    console.log(data);
    const allExpenses = localStorage.getItem("all_expenses");
    const expensesList = allExpenses ? JSON.parse(allExpenses) : [];

      expensesList.push({...data, id: Date.now() });
      console.log(expensesList);

    localStorage.setItem("all_expenses", JSON.stringify(expensesList));

    return expensesList;
 };

 export const getExpenseList = () => {
    const allExpenses = localStorage.getItem("all_expenses");
    const expensesList = allExpenses ? JSON.parse(allExpenses) : [];

    return expensesList;

 }

 export const deleteExpenseFromList = (data) => {
   const allExpenses = localStorage.getItem("all_expenses");
   const expensesList = allExpenses ? JSON.parse(allExpenses) : [];

   const result = expensesList.filter(expense => expense.id !== data);

    localStorage.setItem("all_expenses", JSON.stringify(result));
 }