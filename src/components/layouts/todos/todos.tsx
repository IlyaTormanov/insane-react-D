import * as React from 'react'
import {FunctionComponent} from "react";
import {TodoEntity} from "../../../entyties";
import styles from './todos.module.scss'
import ava from '../../../test.jpg'


export interface todos{
    data:TodoEntity
}

export const Todos:FunctionComponent<todos>=(props)=>{
    return(
        <div className={styles.todo}>
            <React.Fragment key={props.data.id}>
                <img src={ava} className={styles.avatar}/>
               <div className={styles.info}>
                   <div className={styles.title}>{props.data.title}</div>
                   <div className={styles.content}>{props.data.content}</div>
               </div>
                <div>{props.data.creationDate}</div>
            </React.Fragment>
        </div>
    )
}