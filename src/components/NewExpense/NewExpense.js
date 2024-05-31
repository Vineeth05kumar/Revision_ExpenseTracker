import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

export default function NewExpense(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  
  const onSaveHandler = (object) => {
    const newObj = { ...object, id: Math.random().toString() };
    props.onSaveApp(newObj);
    setButtonClicked(false);
  };
const buttonClickHandler = () => {
  setButtonClicked(true);
}
const cancelHandler = () => {
  setButtonClicked(false);
}
  return (
    <>
      <div className="new-expense">
       {!buttonClicked &&<button onClick={buttonClickHandler}>Add New Expense</button>}
        {buttonClicked && <ExpenseForm onSaveData={onSaveHandler} onCancel={cancelHandler}/>}
      </div>
    </>
  );
}
