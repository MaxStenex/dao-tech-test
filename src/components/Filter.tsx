import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../redux/rootReducer";
import { filterTodos } from "../redux/todos/actions";
import { TodoType } from "../redux/todos/reducer";
import "../styles/Filter.scss";

enum FilterTypes {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  NOT_COMPLETED = "NOT_COMPLETED",
}

const Filter: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState("ALL");

  const allTodos = useSelector((state: RootStateType) => state.todos.allTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    // При изменении фильтра происходит повторная фильтрация
    switch (currentFilter) {
      case FilterTypes.COMPLETED: {
        dispatch(filterTodos(allTodos.filter((todo: TodoType) => todo.isDone)));
        break;
      }
      case FilterTypes.NOT_COMPLETED: {
        dispatch(filterTodos(allTodos.filter((todo: TodoType) => !todo.isDone)));
        break;
      }
      default: {
        dispatch(filterTodos(allTodos));
        break;
      }
    }
  }, [currentFilter, allTodos, dispatch]);

  return (
    <section className="filter">
      <div className="container">
        <div className="filter__main">
          <button
            className={
              "filter__select-btn " +
              (FilterTypes.ALL === currentFilter ? "filter__select-btn--active" : "")
            }
            onClick={(evt: React.SyntheticEvent<HTMLButtonElement>) =>
              setCurrentFilter(FilterTypes.ALL)
            }
          >
            Все ({allTodos.length})
          </button>
          <button
            className={
              "filter__select-btn " +
              (FilterTypes.COMPLETED === currentFilter
                ? "filter__select-btn--active"
                : "")
            }
            onClick={(evt: React.SyntheticEvent<HTMLButtonElement>) =>
              setCurrentFilter(FilterTypes.COMPLETED)
            }
          >
            Завершенные ({allTodos.filter((todo: TodoType) => todo.isDone).length})
          </button>
          <button
            className={
              "filter__select-btn " +
              (FilterTypes.NOT_COMPLETED === currentFilter
                ? "filter__select-btn--active"
                : "")
            }
            onClick={(evt: React.SyntheticEvent<HTMLButtonElement>) =>
              setCurrentFilter(FilterTypes.NOT_COMPLETED)
            }
          >
            Незавершенные ({allTodos.filter((todo: TodoType) => !todo.isDone).length})
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
