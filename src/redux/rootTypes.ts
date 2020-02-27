import {TodoActions} from "./actions";
import {ActionType, StateType} from "typesafe-actions";
import {combineReducers} from 'redux'
import {TodoReducers} from "./reducers";


export const RootAction={
    todo:TodoActions
}


export type RootAction=ActionType<typeof RootAction>


export const RootReducer=combineReducers({
    todo:TodoReducers
})

export type RootState=StateType<typeof RootReducer>

