import "./ExpenseForm.css";

export default function ExpenseForm() {
  const titleHandler =(event) => {
    console.log(event.target.value);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-05-31" />
        </div>
        <div className="new-expense__actions">
          <button>ADD EXPENSE</button>
        </div>
      </div>
    </form>
  );
}
