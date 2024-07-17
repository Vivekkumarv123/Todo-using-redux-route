// src/components/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotDoneTodos, selectDoneTodos } from '../redux/modules/todos';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 0 10px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const TodoList = () => {
  const notDoneTodos = useSelector(selectNotDoneTodos);
  const doneTodos = useSelector(selectDoneTodos);

  return (
    <Container>
      <Section>
        <SectionTitle>In Progress</SectionTitle>
        {notDoneTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Section>
      <Section>
        <SectionTitle>Done</SectionTitle>
        {doneTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Section>
    </Container>
  );
};

export default TodoList;
