import {createAction} from 'typesafe-actions'
import {TodoEntity} from "../entyties";
import {ActionType} from "typesafe-actions";




export const TodoActions={
    ADD_TODO:createAction('ADD_TODO')<TodoEntity>(),
    REMOVE_TODO:createAction('REMOVE_TODO')<number>()
}

export type TodoTypes=ActionType<typeof TodoActions>

