import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseData = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(newExpenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    let newExpenseContent = <button onClick={startEditingHandler}>Add New Expense</button>;

    if (isEditing) {
        newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler}/>;
    }

    return (
        <div className="new-expense">
            {newExpenseContent}
        </div>
    );
}

export default NewExpense;
