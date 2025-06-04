import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: Number,
      todo: String,
      completed: Boolean,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export default useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
