import {TodoEntity} from "./entyties";


export const mergeObject = (changes:Partial<TodoEntity>)=> (object:TodoEntity) => ({...object,...changes});