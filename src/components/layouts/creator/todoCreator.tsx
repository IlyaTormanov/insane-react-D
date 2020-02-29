import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {TodoEntity} from "../../../entyties";
import {mergeObject} from "../../../utils";
import {Input} from "../../input/Input";
import {Button} from "../../button/button";
import {useDispatch, useSelector} from "react-redux";
import {TodoActions} from "../../../redux/actions";
import styles from './creator.module.scss'
import {RootState} from "../../../redux/rootTypes";
export interface todoCreator{}

export const Todos:TodoEntity={
    content: "",
    creationDate: 0,
    id: 0,
    title: "",
    userId: 0,
    avatar:undefined
}


export const TodoCreator:FunctionComponent<todoCreator>=()=>{
        const [change,setChange]=useState<TodoEntity>(Todos)
        const pusher=(value:Object)=>setChange(mergeObject(value))
        const dispatch=useDispatch()
    const todosList=useSelector((state:RootState)=>state.todo.addTodo)
    return(geerg
        <div className={styles.creator}>
                <Input onChange={value => pusher({title:value})} placeholder={'title'}/>
                <Input onChange={value => pusher({content:value})} placeholder={'content'}/>
                <Input onChange={value => pusher({avatar:value})} type={'file'}/>
                <Button content={'create todo'}
                        onClick={()=>{localStorage.setItem('todos',JSON.stringify(todosList));dispatch(TodoActions.ADD_TODO(change))}}
                        type={'button'}/>
        </div>
    )
}