import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <div className="expenses">
      {props.newItem.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            name={expense.name}
            price={expense.price}
            location={expense.location}
          />
        );
      })}
    </div>
  );
}
