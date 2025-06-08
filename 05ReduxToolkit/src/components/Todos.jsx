import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <>
      <div className="text-2xl font-bold text-white mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-zinc-700 text-white px-2 py-1 rounded border border-zinc-600 focus:outline-none focus:border-blue-500"
                />
              ) : (
                todo.text
              )}
            </div>
            <div className="flex space-x-2">
              <button
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                onClick={() => {
                  if (editingId === todo.id) {
                    // Save the edit
                    if (editText.trim() !== "") {
                      dispatch(updateTodo({ id: todo.id, text: editText }));
                    }
                    setEditingId(null);
                    setEditText("");
                  } else {
                    // Start editing
                    setEditingId(todo.id);
                    setEditText(todo.text);
                  }
                }}
              >
                {editingId === todo.id ? "📁" : "✏️"}
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
