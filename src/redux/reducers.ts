import {combineReducers} from 'redux'
import {createReducer} from "typesafe-actions";
import {RootAction, RootState} from "./rootTypes";
import {TodoEntity} from "../entyties";
import {TodoActions, TodoTypes} from "./actions";

const addTodo=createReducer<TodoEntity[], RootAction>([] )
    .handleAction(TodoActions.ADD_TODO,(state,action)=>[...state,action.payload])


export const TodoReducers=combineReducers({
        addTodo:addTodo
})