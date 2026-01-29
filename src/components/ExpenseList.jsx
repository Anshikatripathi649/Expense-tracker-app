import React from 'react';

const ExpenseList = ({expenseData, deleteFromDB}) => {
  console.log(expenseData);
  return (
    <div className=' border pb-3 ms-5 '>
       <h6 class="border-bottom pb-3 mb-4 p-2">EXPENSE LIST</h6>
        {expenseData.map((expense) =>{
          return (
          <div key={expense.id} className='d-flex justify-content-between border mx-1 p-1'>
            <span>{expense.category}</span>
            <span>
               <i class="fa-solid fa-indian-rupee-sign"></i>
              {expense.amount}
              </span>
            <span>{expense.date}</span>
            <button class="btn btn-danger" onClick={(() => deleteFromDB(expense.id))}>Delete</button>
          </div>
        )}

        )}
       
    </div>
  )
}

export default ExpenseList;
