import * as React from 'react'
import {FunctionComponent} from "react";
import {todoItem} from "./redux/actions";



export interface todos{
    data:todoItem[]
}

export const Todos:FunctionComponent<todos>=(props)=>{
    return(
        <div>{props.data.map(item=>
            <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.content}</div>
                <div>{item.creationDate}</div>
            </div>
        )}</div>
    )
}