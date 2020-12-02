import { TodoType } from "./reducer";

export enum TodosActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  FILTER_TODOS = "FILTER_TODOS",
}

export type TodosActions =
  | AddTodoType
  | DeleteTodoType
  | ToggleTodoType
  | FilterTodosType;

type AddTodoType = {
  type: TodosActionTypes.ADD_TODO;
  payload: {
    text: string;
  };
};

export const addTodo = (text: string): AddTodoType => {
  return {
    type: TodosActionTypes.ADD_TODO,
    payload: {
      text,
    },
  };
};

type DeleteTodoType = {
  type: TodosActionTypes.DELETE_TODO;
  payload: {
    id: number;
  };
};

export const deleteTodo = (id: number): DeleteTodoType => {
  return {
    type: TodosActionTypes.DELETE_TODO,
    payload: {
      id,
    },
  };
};

type ToggleTodoType = {
  type: TodosActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
  };
};

export const toggleTodo = (id: number): ToggleTodoType => {
  return {
    type: TodosActionTypes.TOGGLE_TODO,
    payload: {
      id,
    },
  };
};

type FilterTodosType = {
  type: TodosActionTypes.FILTER_TODOS;
  payload: {
    filteredTodos: Array<TodoType>;
  };
};

export const filterTodos = (filteredTodos: Array<TodoType>): FilterTodosType => {
  return {
    type: TodosActionTypes.FILTER_TODOS,
    payload: {
      filteredTodos,
    },
  };
};
