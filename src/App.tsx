import React from "react";
import "./styles/App.scss";
import "./styles/normalize.scss";

import { Filter, Header, TodoList } from "./components";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Filter />
      <TodoList />
    </div>
  );
};

export default App;
