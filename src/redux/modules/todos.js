// src/redux/modules/todos.js
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO';
const GET_TODO_BY_ID = 'todos/GET_TODO_BY_ID';

// Action Creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
// src/redux/modules/todos.js
export const selectNotDoneTodos = (state) => state.todos.todos.filter(todo => todo.status === 'In Progress');
export const selectDoneTodos = (state) => state.todos.todos.filter(todo => todo.status === 'Done');

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleStatusTodo = (id) => ({
  type: TOGGLE_STATUS_TODO,
  payload: id,
});

export const getTodoById = (id) => ({
  type: GET_TODO_BY_ID,
  payload: id,
});

// Initial State
const initialState = {
  todos: [],
  selectedTodo: null,
};

// Reducer
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, status: todo.status === 'Done' ? 'In Progress' : 'Done' }
            : todo
        ),
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        selectedTodo: state.todos.find(todo => todo.id === action.payload),
      };
    default:
      return state;
  }
}
