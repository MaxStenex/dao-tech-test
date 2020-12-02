import React from "react";
import "../styles/Todo.scss";

const Todo: React.FC = () => {
  return (
    <li className="todolist__item todo">
      <p className="todo__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, obcaecati odit
        tenetur et hic sit.
      </p>
      <button className="todo__delete-btn">Удалить</button>
    </li>
  );
};

export default Todo;
