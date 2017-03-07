import {RECEIVE_TODOS} from './../actions/todo_actions.js';
import {RECEIVE_TODO} from './../actions/todo_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:

      // iterating throgh action.todos setting a key value pair for each one in the new state.
      // return the new state
      action.todos.forEach( (val, key) => {
        newState[key] = val;
      });
      return newState;

    case RECEIVE_TODO:
      debugger;
      newState[action.todo.id] = action.todo;
      newState = merge(state, newState);
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
window.todosReducer = todosReducer;
