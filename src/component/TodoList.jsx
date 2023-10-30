import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../redux/reducers/todosReducer"; // Import the new action
import { useState } from "react";

function TodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleCheckboxClick = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditClick = (id, text) => {
    setEditMode(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id) => {
    // Dispatch the editTodo action to update the text
    dispatch(editTodo(id, editedText));

    // Exit edit mode
    setEditMode(null);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-box">
          <div className="content">
            <input
              type="checkbox"
              checked={todo.completed}
              name={"cb" + todo.id}
              id={"cb" + todo.id}
              onChange={() => handleCheckboxClick(todo.id)}
            />
            {editMode === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <span
                style={
                  todo.completed === true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo.value}
              </span>
            )}
            <button onClick={() => handleEditClick(todo.id, todo.value)}>
              Edit
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
