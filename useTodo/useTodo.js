/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useCounter } from "./useCounter";


// const initialState = []; el useReducer lo toma como un arreglovacío ya que no tenemos nada por ahora

const initTodo = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  // JSON.parse = null por ello hacemos entrega de un arreglo vacío.
};


export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });

  }

  return {
          todos,

          todosCount: todos.length,
          pendingTodosCount: todos.filter(todo=> !todo.done).length ,

          handleNewTodo,
          handleDeleteTodo,
          handleToggleTodo
    }
};
