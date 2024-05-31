import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const Dummy_Expenses = [
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

export default function App() {
  const [addNewExpense, setNewExpense] = useState(Dummy_Expenses);

  const onSaveAppHandler = (object) => {
    setNewExpense((prev) => {
      return [object, ...prev];
    });
  };
  return (
    <>
      <NewExpense onSaveApp={onSaveAppHandler} />
      <Expenses newItem={addNewExpense} />
    </>
  );
}
