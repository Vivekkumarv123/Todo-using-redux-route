// src/App.js
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo'; // Import AddTodo component
import { Provider } from 'react-redux';
import store from './redux/config/store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <AddTodo /> {/* Render AddTodo component */}
    <TodoList />
  </Provider>
);

export default App;
