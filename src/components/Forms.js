import React from 'react';

function Forms({ inputText, setInputText, todos, setTodos, setStatus }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random()
            }
        ]);
        setInputText('');
    };
    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value); //setStatus is not a function
    };
    return (
        <div>
            <form action="">
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"
                />
                <button
                    onClick={submitTodoHandler}
                    className="todo-button"
                    type="submit"
                >
                    here is the button
                </button>
            </form>
            <div className="select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter"
                >
                    <option value="all">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>
    );
}

export default Forms;
