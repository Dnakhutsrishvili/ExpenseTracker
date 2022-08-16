import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);
  const saveExpenseDataHendeler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormState(false);
  };

  const stopEditing = () => {
    setFormState(false);
  };

  return (
    <div className="new-expense">
      {!formState && (
        <button
          onClick={() => {
            setFormState(true);
          }}
        >
          Add New Expense
        </button>
      )}
      {formState && (
        <ExpenseForm
          onclickCancale={stopEditing}
          onSaveExpenseData={saveExpenseDataHendeler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
