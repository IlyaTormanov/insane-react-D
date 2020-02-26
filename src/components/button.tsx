import * as React from 'react'
import {FunctionComponent} from "react";
import Omit = jest.Omit;

export interface ButtonProps extends HTMLButtonElement{
    content:String,
    onClick:()=>void
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
        <button onClick={props.onClick} >{props.content}</button>
    )
}

