import React from "react";
import "./App.css";

// import {TodoList,AddTodo,Show} from "./components/index";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Show from "./components/Show";
import { createStore } from "redux";

// react-redux 提供两个东西 Provider 和 connect。
import { Provider } from "react-redux";
import combineReducers from "./reducers";

function App() {
  return (
    <Provider store={createStore(combineReducers)}>
      <AddTodo />
      <TodoList />
      <Show />
    </Provider>
  );
}

export default App;
