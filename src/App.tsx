import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./todoList";
import {todoItem} from "./redux/actions";
import {Input} from "./components/Input";

export const todoEntity:todoItem={
  id:0,
  userId:0,
  title:"",
  creationDate:0,
  content:""
}

function App() {
  console.log(todoEntity)
  const [todo,setTodo]=useState<todoItem>(todoEntity)
  const changesTodo=(changes:any)=>setTodo(changes)
  console.log(todo)
  return (
    <div className="App">
      <Input onChange={value => changesTodo(value)}/>
      <TodoList/>
    </div>
  );
}

export default App;
