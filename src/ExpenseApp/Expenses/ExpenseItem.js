import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseitem.css";
import Card from "../UI/Card";
import { FaRupeeSign } from "react-icons/fa";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <FaRupeeSign size={15} />
          {props.amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
