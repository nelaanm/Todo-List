const initialState = {
  todos: [
    { id: 1, value: "Buy Milk" },
    { id: 2, value: "Buy Egg" },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };

      const cloneTodos = [...state.todos, newTodo];

      return {
        todos: cloneTodos,
      };
    case "DELETE_TODO":
      const filterTodo = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        todos: filterTodo,
      };
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      return {
        todos: toggledTodos,
      };
    case "EDIT_TODO": // New action type to edit a todo item
      const editedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, value: action.payload.newValue }
          : todo
      );

      return {
        todos: editedTodos,
      };
    default:
      return state;
  }
}

export function addTodo(input) {
  return {
    type: "ADD_TODO",
    payload: input,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
}

export function editTodo(id, newValue) {
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      newValue: newValue,
    },
  };
}

export default todoReducer;
