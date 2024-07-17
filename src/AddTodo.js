// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      content,
      status: 'In Progress',
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo Title"
      />
      <Input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Todo Content"
      />
      <Button type="submit">Add Todo</Button>
    </Form>
  );
};

export default AddTodo;
