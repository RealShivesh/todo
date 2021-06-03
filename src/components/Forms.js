import React from 'react'

function Forms() {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <form action="">
                <input onChange={inputTextHandler} type="text" className="todo-input"/>
                <button className="todo-button" type="submit">here is the button</button>
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
