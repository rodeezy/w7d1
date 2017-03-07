import React from 'react';
import allTodos from './../../reducers/selectors.js';

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     this.render();
//   }
//
//   render() {
//     return (
//       <li key={this.props.id}>
//         {this.props.title}
//       </li>
//     );
//
//   }
// }

const TodoListItem = ({item}) => (
  <li>{item.title}</li>
);

export default TodoListItem;
