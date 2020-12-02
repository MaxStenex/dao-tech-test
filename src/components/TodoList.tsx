import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../redux/rootReducer";
import { TodoType } from "../redux/todos/reducer";
import "../styles/TodoList.scss";
import { Todo } from "./";

const TodoList: React.FC = () => {
  const filteredTodos = useSelector((state: RootStateType) => state.todos.filteredTodos);

  return (
    <section className="todolist">
      <div className="container">
        <ul className="todolist__list">
          {filteredTodos.map((todo: TodoType) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
