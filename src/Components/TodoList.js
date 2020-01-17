import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import List from 'material-ui/List';
import Todo from './Todo';

class TodoList extends PureComponent {
  static propTypes = { 
      handleRemove: PropTypes.func,
      handleCheck: PropTypes.func,
      todos: PropTypes.array,
  }

  render() {
    const {
      handleRemove,
      handleCheck,
      todos,
    } = this.props;

    let todoNode = todos.map((todo) => {
    return (
      <Todo 
        key={ todo.id } 
        todo={ todo.title } 
        id = {todo.id}
        checked = { todo.completed }
        handleRemove={handleRemove}
        handleCheck={handleCheck}
      />
    )
  })
    return(
      <List style={{marginLeft: '5%'}}>
      <ul>{ todoNode }</ul>
    </List>
    )
  }
}
  
export default TodoList