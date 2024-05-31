export default function ExpenseFilter(props) {
    const selectedYear = (event) => {
        props.onSelecting(event.target.value);
    }
  return <div className="expenses-filter">
    <div className="expenses-filter__control">
    <label>Filter by Year</label>
    <select  value={props.yearSelected} onChange={selectedYear}>
        <option value="2019" >2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
    </select>
  </div>
    </div>;
}
