import './ExpenseItem.css';

export default function ExpenseDetails(props) {
  return (
    <>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
    </>
  );
}
