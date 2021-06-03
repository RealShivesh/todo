import React from 'react'

function Forms({inputText, setInputText, todos, setTodos }) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
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
        ])
        setInputText("");
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
                <button onClick={submitTodoHandler} className="todo-button" type="submit">here is the button</button>
            </form>
            <div className="select">
                <select name="todos" className="filter">
                    <option value="all">All</option>
                    <option value="incomplete">Incomplete</option>                
                    <option value="completed">Completed</option>
            </select>
            </div>
            </div>
    )
}

export default Forms
