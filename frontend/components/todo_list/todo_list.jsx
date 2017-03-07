import React from 'react';
//import Todo from './todo.jsx';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

const TodoList = ({todos, receiveTodo}) => {
  console.log(todos);
  return (
    <ul>
      {todos.map( todo_item => {
         return (
           <TodoListItem key={todo_item.id} item={todo_item} />
        );
      })}
      <TodoForm receiveTodo={receiveTodo}/>
    </ul>
  );

};

//{todo_item.title} {todo_item.id} {todo_item.body}
//<li key={todo_item.id}> {todo_item.title}</li>

export default TodoList;
