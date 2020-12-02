import { TodosActions, TodosActionTypes } from "./actions";

export type TodoType = {
  id: number;
  text: string;
  isDone: boolean;
};

export type TodosStateType = {
  allTodos: Array<TodoType>;
  filteredTodos: Array<TodoType>;
};

const initialState: TodosStateType = {
  allTodos: [],
  filteredTodos: [],
};

const todosReducer = (state = initialState, action: TodosActions): TodosStateType => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO: {
      const newTodo: TodoType = {
        id: new Date().getTime(),
        text: action.payload.text,
        isDone: false,
      };
      return { ...state, allTodos: [...state.allTodos, newTodo] };
    }
    case TodosActionTypes.DELETE_TODO: {
      return {
        ...state,
        allTodos: state.allTodos.filter(
          (todo: TodoType) => todo.id !== action.payload.id
        ),
      };
    }
    case TodosActionTypes.TOGGLE_TODO: {
      return {
        ...state,
        allTodos: state.allTodos.map(
          (todo: TodoType): TodoType =>
            todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    }
    case TodosActionTypes.FILTER_TODOS: {
      return {
        ...state,
        filteredTodos: action.payload.filteredTodos,
      };
    }

    default: {
      return state;
    }
  }
};

export default todosReducer;
