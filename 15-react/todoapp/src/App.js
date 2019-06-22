import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = { 
    todos: [
      {id: 1, content: `Study and code`},
      {id: 2, content: `Study and code some more`},
      {id: 3, content: `Get confused and hit head on desk`},
      {id: 4, content: `Go play soccer and leave code alone`},
      {id: 5, content: `Come back and figure out what was wrong`}
    ]
   }
   deleteTodo = (id) => {
     const todos = this.state.todos.filter(todo => {
       return todo.id !== id
     });
     this.setState({
       todos
     })
   }
   addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({
        todos: todos
      })
   }
  render() { 
    return ( 
      <div className="todo-app container">
        <h1 className="center blue-text">My Todo List</h1>
        <p className="center">Enter in new todo's in the box below (and hit enter to add them to list). To delete: click the X once completed</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/> 
      </div>
     );
  }
}
 
export default App;


