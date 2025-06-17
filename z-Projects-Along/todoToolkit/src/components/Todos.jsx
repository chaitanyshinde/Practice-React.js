import React, { useState } from "react";
import { deleteTodo, editTodo } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditSave = (todo) => {
    if (editingId === todo.id) {
      if (editText.trim() !== "") {
        dispatch(editTodo({ id: todo.id, text: editText }));
      }
      setEditingId(null);
      setEditText("");
    } else {
      setEditingId(todo.id);
      setEditText(todo.text);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Todos</h2>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEditSave(todo);
                      } else if (e.key === "Escape") {
                        handleCancelEdit();
                      }
                    }}
                  />
                ) : (
                  <span className="text-gray-800 break-words">{todo.text}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleEditSave(todo)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                      title="Save"
                    >
                      ✓
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1"
                      title="Cancel"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEditSave(todo)}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    title="Edit"
                  >
                    ✏️
                  </button>
                )}
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
