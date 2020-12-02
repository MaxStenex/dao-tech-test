import React from "react";
import "../styles/TodoList.scss";
import { Todo } from "./";

const TodoList: React.FC = () => {
  return (
    <section className="todolist">
      <div className="container">
        <ul className="todolist__list">
          <Todo />
          <Todo />
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
