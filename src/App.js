import ExpenseItem from "./components/ExpenseItem";

export default function App() {
  return (
    <div>
      <ExpenseItem location="Banglore" name="Insurence" price="500" date="new Date(2024,5,23)" />
      <ExpenseItem location="Delhi" name="Book" price="50" date="new Date(2024,5,23)"/>
      <ExpenseItem location="Hyderbad" name="Pen" price="5" date="new Date(2024,5,23)"/>
      <ExpenseItem location="Mumbai" name="Laptop" price="1500" date="new Date(2024,5,23)"/>
    </div>
  );
}
