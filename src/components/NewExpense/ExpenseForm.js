import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {

    const [expenseTitle, setExpenseTitle] = useState("");
    const [expensePrice, setExpensePrice] = useState("");
    const [expenseDate, setExpenseDate] = useState("");

    const expenseTitleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    }

    const expensePriceChangeHandler = (event) => {
        setExpensePrice(event.target.value);
    }

    const expenseDateChangeHandler = (event) => {
        setExpenseDate(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: expenseTitle,
            amount: +expensePrice,
            date: new Date(expenseDate)
        }
        props.onSaveExpenseData(expenseData);
        setExpenseTitle("");
        setExpensePrice("");
        setExpenseDate("");
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={expenseTitle} onChange={expenseTitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={expensePrice} min="0.01" step="0.01"
                           onChange={expensePriceChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={expenseDate} min="2019-01-01" max="2022-12-31"
                           onChange={expenseDateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
