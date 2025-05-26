import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="edit-input"
            autoFocus
            maxLength={100}
          />
        ) : (
          <span className="todo-text" onDoubleClick={handleEdit}>
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="save-btn"
              disabled={!editText.trim()}
            >
              Save
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="edit-btn"
              disabled={todo.completed}
            >
              Edit
            </button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
