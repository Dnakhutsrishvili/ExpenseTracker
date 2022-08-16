import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpenseFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredDate, setFilteredDate] = useState("2020");
  const GetFilteredYearHendeler = (date) => {
    setFilteredDate(date);
  };

  const FilteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString().includes(filteredDate);
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        getFilteredDate={GetFilteredYearHendeler}
        yearValue={filteredDate}
      ></ExpensesFilter>
      <ExpensesChart expenses={FilteredExpenses} />
      <ExpensesList expenseFiltered={FilteredExpenses}></ExpensesList>
    </div>
  );
};
export default Expenses;
