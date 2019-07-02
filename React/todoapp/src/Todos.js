import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                  <span>{todo.content} <button className="blue-text" onClick={() => {deleteTodo(todo.id)}}>X</button></span>  
                </div>
            )
        })
    ) : (
        <p className="center">No todo's left. Ya done son!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;