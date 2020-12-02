import { combineReducers } from "redux";
import todosReducer, { TodosStateType } from "./todos/reducer";

export interface RootStateType {
  todos: TodosStateType;
}

const rootReducer = combineReducers<RootStateType>({
  todos: todosReducer,
});

export default rootReducer;
