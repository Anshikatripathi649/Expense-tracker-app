
💰 Expense Tracker (React)

A simple and user-friendly Expense Tracker application built using React that helps users manage daily expenses by category and month.
The app stores data in LocalStorage, making it lightweight and easy to use without any backend.

🚀 Features

➕ Add expenses with category, amount, and date

📋 View all expenses in a structured list

🗑️ Delete expenses instantly

📆 Filter expenses by month

📊 Visual charts for expense analysis

💾 Persistent storage using LocalStorage

🎯 Clean UI using Bootstrap

⚡ Fast and responsive React components

🗂️ Expense Categories

The application currently supports the following categories:

Groceries

Food

Transport

Entertainment

Category names are stored in Title Case for consistency across the app.

🛠️ Tech Stack

React.js (Hooks: useState, useEffect)

JavaScript (ES6)

Bootstrap

Font Awesome Icons

LocalStorage API

📁 Project Structure
expense-tracker/
│
├── src/
│   ├── components/
│   │   ├── AddExpense.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── TotalSpend.jsx
│   │   └── Charts.jsx
│   │
│   ├── store/
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── public/
├── package.json
└── README.md

🧾 Data Format (LocalStorage)

Expenses are stored under the key all_expenses in the following format:

{
  "id": "1706001112345_101",
  "category": "Food",
  "amount": 300,
  "date": "2025-01-12"
}

🔐 Strong ID Strategy

Each expense uses a strong unique ID created using:

timestamp + random number


This ensures safe deletion and avoids ID collisions.

▶️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/Anshikatripathi649/Expense-tracker-app.git

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev


The app will run at:

http://localhost:5173

🧪 Add Demo Data (Optional)

Open browser console and run:

localStorage.setItem(
  "all_expenses",
  JSON.stringify([
    { id: "1706001112345_101", category: "Groceries", amount: 500, date: "2025-01-05" },
    { id: "1706001115678_102", category: "Food", amount: 300, date: "2025-01-12" },
    { id: "1706001119876_103", category: "Transport", amount: 1200, date: "2025-02-08" },
    { id: "1706001123456_104", category: "Entertainment", amount: 399, date: "2025-02-20" }
  ])
);


Refresh the page 🔄 to see the data.

🧠 Learning Outcomes

React component architecture

State management using hooks

LocalStorage CRUD operations

Conditional rendering and filtering

Modular and reusable components

🔮 Future Enhancements

✏️ Edit expense feature

📤 Export expenses to CSV

📅 Year-wise filtering

🎨 Category-wise color coding

☁️ Backend integration (Node.js + MongoDB)

👩‍💻 Author

Anshika Tripathi
BSc Computer Science
Aspiring Full-Stack Developer

⭐ Support

If you like this project, please ⭐ star the repository and feel free to fork it!
