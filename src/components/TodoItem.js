// src/components/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';
import styled from 'styled-components';

const TodoContainer = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoText = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#dc3545')};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#c82333')};
  }
`;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleStatusTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <TodoContainer>
      <TodoText>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </TodoText>
      <div>
        <Button primary onClick={handleToggleStatus}>
          {todo.status === 'Done' ? 'Cancel' : 'Complete'}
        </Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </TodoContainer>
  );
};

export default TodoItem;
