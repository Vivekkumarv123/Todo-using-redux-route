// src/components/TodoDetail.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoById } from '../redux/modules/todos';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const TodoDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedTodo = useSelector(state => state.todos.selectedTodo);

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  if (!selectedTodo) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Title>{selectedTodo.title}</Title>
      <Content>{selectedTodo.content}</Content>
      <Button onClick={() => history.push('/')}>Back</Button>
    </Container>
  );
};

export default TodoDetail;
