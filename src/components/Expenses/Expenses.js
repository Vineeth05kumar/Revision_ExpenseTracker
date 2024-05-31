import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectingYearHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.newItem.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No result found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = (
      <>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            name={expense.name}
            price={expense.price}
            location={expense.location}
          />
        ))}
        {filteredExpenses.length === 1 && <p>Add more items....</p>}
      </>
    );
  }
  return (
    <div className="expenses">
      <ExpenseFilter
        onSelecting={selectingYearHandler}
        yearSelected={filteredYear}
      />
      {expensesContent}
    </div>
  );
}
