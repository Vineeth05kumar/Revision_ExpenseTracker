import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className='expense-item'>
       <div>14 August 2024</div>
       <div className='expense-item__description'>
        <h2>Book</h2>
        <div className='expense-item__price'>$10</div>
       </div>
       <div className='expense-item__location'>Adilabad</div>
    </div>
  );
}
