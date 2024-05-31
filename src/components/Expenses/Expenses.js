import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function Expenses() {
  const expenses = [
    {
      id: "1",
      location: "Banglore",
      name: "Insurence",
      price: "500",
      date: new Date(2024, 5, 23),
    },
    {
      id: "2",
      location: "Delhi",
      name: "Book",
      price: "50",
      date: new Date(2024, 9, 13),
    },
    {
      id: "3",
      location: "Hyderbad",
      name: "Pen",
      price: "5",
      date: new Date(2024, 9, 2),
    },
    {
      id: "4",
      location: "Mumbai",
      name: "Laptop",
      price: "1500",
      date: new Date(2024, 11, 3),
    },
  ];
  return (
    <div className="expenses">
      {expenses.map((expense) => {
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
