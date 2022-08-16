import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense.js/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHendeler = (expesne) => {
    console.log(expesne);
    setExpenses((prevExpenses) => {
      return [expesne, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHendeler}></NewExpense>

      <Expenses item={expenses}></Expenses>
    </>
  );
}

export default App;