import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo List</h1>
        <p className="todo-subtitle">Organize your tasks efficiently</p>
      </header>

      <div className="todo-container">
        <TodoForm onAdd={addTodo} />

        <div className="todo-stats">
          <span className="stat">
            <strong>{activeCount}</strong> active
          </span>
          <span className="stat">
            <strong>{completedCount}</strong> completed
          </span>
          <span className="stat">
            <strong>{todos.length}</strong> total
          </span>
        </div>

        <TodoFilter
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          hasCompleted={completedCount > 0}
        />

        <TodoList
          todos={getFilteredTodos()}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

        {todos.length === 0 && (
          <div className="empty-state">
            <p>No todos yet. Add one above to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
