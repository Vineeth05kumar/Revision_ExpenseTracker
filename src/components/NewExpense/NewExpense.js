import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const onSaveHandler = (object) => {
    const newObj={...object,id:Math.random().toString()};
    props.onSaveApp(newObj);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onSaveHandler} />
    </div>
  );
}
