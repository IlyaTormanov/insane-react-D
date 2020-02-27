import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./components/layouts/todos/todoList";

import {TodoCreator} from "./components/layouts/creator/todoCreator";
import {Input} from "./components/input/Input";
import {useSelector} from "react-redux";
import {RootState} from "./redux/rootTypes";

function App() {

  return (
    <div className="App">
        <TodoCreator/>
      <TodoList />
    </div>
  );
}

export default App;
