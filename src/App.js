import "./App.css";

import { useState } from "react";
import Expenses from "./ExpenseApp/Expenses/Expenses";
import NewExpense from "./ExpenseApp/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Mobile",
    amount: 10000,
    date: new Date(2020, 1, 14),
  },
  { id: "e2", title: "Grocery", amount: 799, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 2100,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Chair",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "Earphone",
    amount: 1500,
    date: new Date(2021, 9, 28),
  },
  {
    id: "e5",
    title: "New TV",
    amount: 35000,
    date: new Date(2019, 7, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <div className="main">
        <h1 className="top-head">EXPENSE TRACKER</h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </>
  );
}

export default App;
