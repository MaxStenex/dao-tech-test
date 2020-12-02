import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/actions";
import "../styles/Header.scss";

const minimumSymbols: number = 6;

const Header: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onTodoAdd = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (todoText.trim().length < minimumSymbols) {
      return setError(true);
    } else {
      dispatch(addTodo(todoText));
      setError(false);
      setTodoText("");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h2 className="header__title">Список задач</h2>
          <form className="header__form" onSubmit={onTodoAdd}>
            <input
              type="text"
              className="header__input"
              placeholder="Новая задача"
              value={todoText}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                setTodoText(evt.target.value)
              }
            />

            <button className="header__add-btn" type="submit">
              Добавить
            </button>
          </form>
          {error ? (
            <span className="header__error">
              Текст должен быть больше {minimumSymbols} символов
            </span>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
