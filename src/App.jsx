import { useState, useEffect } from 'react'
import './App.css'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'
import TotalSpend from './components/TotalSpend'
import Charts from './components/Charts'
import { getExpenseList, deleteExpenseFromList } from './store/store';

function App() {
  const [expenseData, setExpenseData ] = useState([]);
  const [month, setMonth] = useState('');

 function deleteFromDB(deleteExpense) {
   deleteExpenseFromList(deleteExpense);
   const data = getExpenseList();
    console.log(data);
    setExpenseData(data);
 }

  const monthMap = {
  jan: "01",
  feb: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  aug: "08",
  sept: "09",
  oct: "10",
  nov: "11",
  dec: "12",
};


  const filteredExpenses = expenseData.filter((expense) => {
     if (!month) {
      return true;
    }
    const expenseMonth = expense.date.split("-")[1];

    return expenseMonth === monthMap[month];

  });

  useEffect(() => {
    const data = getExpenseList();
    console.log(data);
    setExpenseData(data);
  }, []);

  return (
    <>
      <div class="d-flex justify-content-between border align-items-center p-2 mx-5 bg-primary text-white pt-0 mt-0">
        <h1>Expense Tracker</h1>
         <div className ="dropdown">
             <label htmlFor="month">Select Month </label>
             <select id="month" name="month" onChange={(e) => setMonth(e.target.value)}
              value={month}>
               <option value="">Select Month</option>
               <option value="jan">January</option>
               <option value="feb">February</option>
               <option value="march">March</option>
               <option value="april">April</option>
               <option value="may">May</option>
               <option value="june">June</option>
               <option value="july">July</option>
               <option value="aug">August</option>
               <option value="sept">September</option>
               <option value="oct">October</option>
               <option value="nov">November</option>
               <option value="dec">December</option>

             </select>
         </div>

      </div>
      <AddExpense setExpenseData={setExpenseData} />
      <div class='row mt-2'>
        <div class="col">
          <ExpenseList expenseData={filteredExpenses}  
          deleteFromDB = {deleteFromDB} />
        </div>
        <div class="col">
          <TotalSpend expenseData={ filteredExpenses}/>
           <Charts expenseData={ filteredExpenses}/>
        </div>
         
      </div>
    </>
  )
}

export default App
