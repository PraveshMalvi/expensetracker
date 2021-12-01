import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newexpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
