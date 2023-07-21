import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 55.67,
    date: new Date(2023, 3, 15),
  },

  {
    id: "e2",
    title: "New LED",
    amount: 750.78,
    date: new Date(2023, 5, 20),
  },

  {
    id: "e3",
    title: "New Laptop",
    amount: 880,
    date: new Date(2023, 4, 15),
  },

  {
    id: "e4",
    title: "New Desk",
    amount: 459,
    date: new Date(2023, 6, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
