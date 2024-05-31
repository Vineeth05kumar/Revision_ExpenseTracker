import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../Card/Card";

export default function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.price);

  const deleteHandler = () => {
    setAmount(100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        name={props.name}
        price={amount}
        location={props.location}
      />
      <button type="button" onClick={deleteHandler}>Delete</button>
    </Card>
  );
}
