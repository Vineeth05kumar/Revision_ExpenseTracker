import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState('');

  const titleHandler =(event) => {
    setEnteredTitle(event.target.value);
  }

  const amountHandler =(event) => {
    setEnteredAmount(event.target.value);
  }

  const dateHandler =(event) => {
    setEnteredDate(event.target.value);
  }
  const locationHandler = (event)=>{
    setEnteredLocation(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const obj = {
      name:enteredTitle,
      price:enteredAmount,
      date:new Date(enteredDate),
      location:enteredLocation,
    }

    props.onSaveData(obj);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleHandler} value={enteredTitle}type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={amountHandler} value={enteredAmount} type="number" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={dateHandler} value={enteredDate} type="date" min="2019-01-01" max="2024-05-31" />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input onChange={locationHandler} value={enteredLocation}type="text" />
        </div>
        <div className="new-expense__actions">
          <button type="submit" >ADD EXPENSE</button>
        </div>
      </div>
    </form>
  );
}
