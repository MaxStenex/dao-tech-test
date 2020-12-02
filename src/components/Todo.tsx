import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todos/actions";
import { TodoType } from "../redux/todos/reducer";
import "../styles/Todo.scss";

const Todo: React.FC<TodoType> = ({ text, id, isDone }) => {
  const dispatch = useDispatch();
  const onTodoDelete = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(deleteTodo(id));
  };
  const onTodoToggle = (evt: React.SyntheticEvent<HTMLParagraphElement>) => {
    dispatch(toggleTodo(id));
  };

  return (
    <li className="todolist__item todo">
      <p
        className={"todo__text " + (isDone ? "todo__text--done" : "")}
        onClick={onTodoToggle}
      >
        {text}
      </p>
      <button className="todo__delete-btn" onClick={onTodoDelete}>
        Удалить
      </button>
    </li>
  );
};

export default Todo;
