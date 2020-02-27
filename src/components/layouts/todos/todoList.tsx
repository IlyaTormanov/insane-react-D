import * as React from 'react'
import {FunctionComponent} from "react";
import {Todos} from "./todos";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/rootTypes";
import styles from './todosList.module.scss'

export interface todoListProps {

}

export const TodoList: FunctionComponent<todoListProps> = () => {
    const todos = useSelector((state: RootState) => state.todo.addTodo)
        console.log(todos)
    return (

        <div className={styles.container}>
            {todos.map(i =>
                <Todos data={i}/>
            )
            }
        </div>
    )
}