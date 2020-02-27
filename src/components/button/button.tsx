import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './button.module.scss'

export interface ButtonProps {
    content:String,
    onClick:()=>void,
    type:"button"|'submit'
}

// export interface Ent{
//     title:String,
//     descr:String
// }
// export const testEntity:Ent={
//     title:"title",
//     descr:"description"
// }
//
//
// export type generateType=Omit<Ent,'descr'>
//
// const newTestEntity:generateType={
//     title:"123",
// }
export const Button:FunctionComponent<ButtonProps>=(props)=>{
    return(
        <button onClick={props.onClick} type={props.type} className={styles.button}>{props.content}</button>
    )
}

