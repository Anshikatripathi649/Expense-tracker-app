import {useState} from 'react'
import { addExpense } from '../store/store.jsx';

const AddExpense = ({ setExpenseData }) => {
   const [errors, setErrors] = useState({});
    const [newExpense, setNewExpense] = useState({
        amount:  '',
        category: '',
        date: '',
    });

    const validate = () => {
  const newErrors = {};

  if (!newExpense.amount || Number(newExpense.amount) <= 0) {
    newErrors.amount = "Amount must be greater than 0";
  }

  if (!newExpense.category) {
    newErrors.category = "Category is required";
  }

  if (!newExpense.date) {
    newErrors.date = "Date is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

    const handleOnchange = (e) => {
      const {name, value} = e.target;
      setNewExpense((previousOne) => ( {...previousOne, [name]: value }));
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();
       if(!validate()) return; 
      const newExpenseData = addExpense(newExpense);
      setExpenseData(newExpenseData);
       setNewExpense({
        amount: '',
        category: '',
        date: '',
       })
       
    };

  return (
    <div class="d-flex mx-5 flex-column border mt-2">
      <div className='border-bottom mb-3 p-2'>
        <h6>ADD EXPENSE</h6>
      </div>
      <div class="p-3">
        <form onSubmit={handleOnSubmit}>
            <div className='d-flex justify-content-around'>
                 <div>
                <label htmlFor="amount">Amount 
                <i class="fa-solid fa-indian-rupee-sign"></i>
             </label>
            <input type="number" id="amount" name="amount"
             onChange={handleOnchange}
             value={newExpense.amount}
             >
            </input>
            <br />
            {errors.amount && <small className="text-danger">{errors.amount}</small>}
            </div>
            <div class="dropdown">
               <label htmlFor="category" > Category</label>
               <select id="category" name="category" class='border'
               onChange={handleOnchange} 
               value={newExpense.category}
                >
                 <option value="">Select Category</option>
                 <option value="Grocery">Groceries</option>
                 <option value="Food">Food</option>
                 <option value="Transport">Transport</option>
                 <option value="Entertainment">Entertainment</option>
               </select>
               <br />
               {errors.category && <small className="text-danger">{errors.category}</small>}

              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input type="date" id='date' name="date"
                onChange={handleOnchange} 
                value={newExpense.date}/>
                <br />
                {errors.date && <small className="text-danger">{errors.date}</small>}

              </div>
            </div>
             <div class="d-flex justify-content-center mt-5">
                <button class="px-5 bg-primary text-white">Add Expense</button>
             </div>
        </form>
      </div>
    </div>
  )
}

export default AddExpense;
