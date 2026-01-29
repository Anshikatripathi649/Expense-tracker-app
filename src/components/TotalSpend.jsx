import React from 'react'

const formatCategory = (category) => {
  if (!category) return "Other";
  const trimmed = category.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

const TotalSpend = ({expenseData}) => {

  if (!expenseData || expenseData.length === 0) return null;

  const summary = expenseData.reduce((acc, expense) => {
    const amount = Number(expense.amount);
    
    // 1. Calculate Grand Total
    acc.total = (acc.total || 0) + amount;

    // 2. Normalize category name (So "grocery" becomes "Grocery")
    const rawCategory = expense.category;
    const category = formatCategory(rawCategory);

    // 3. Add to specific category bucket
    acc[category] = (acc[category] || 0) + amount;

    return acc;

  }, { total : 0});
   
  return (
      <div className="border pb-3 me-5">
      <h6 className="border p-2">SUMMARY</h6>
      <span className="px-1"><b>Total Expenditures: </b>{expenseData.length}</span>
      <br />
      <span className="px-1"> <b>Total Spent:</b> ₹ {summary.total}</span>
      <br />
      {summary.Grocery && (
        <span className="px-1"><b>Grocery Spent: </b>₹ {summary.Grocery}</span>
      )}
      <br />
      
       {summary.Transport && (
        <span className="px-1"><b>Transport Spent:</b> ₹ {summary.Transport}</span>
      )}
      <br />
      {summary.Food && (
        <span className="px-1"><b>Food Spent:</b> ₹ {summary.Food}</span>
      )}
      <br />
      {summary.Entertainment && (
        <span className="px-1"><b>Entertainment Spent:</b> ₹ {summary.Entertainment}</span>
      )}
    </div>
  )
}

export default TotalSpend;
