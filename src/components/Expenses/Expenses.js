import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const selectingYearHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.newItem.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpenseFilter
        onSelecting={selectingYearHandler}
        yearSelected={filteredYear}
      />
      {filteredExpenses.map((expense) => {
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
