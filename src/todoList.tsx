import * as React from 'react'
import {FunctionComponent} from "react";
import {Todos} from "./todos";
import {todoItem} from "./redux/actions";


export const mock:todoItem[]=[
    {
        id:0,
        userId:0,
        title:"Poshel Naxyi",
        creationDate:new Date().getDate(),
        content:"firstTask"

    },

]

export interface todoListProps{

}

export const TodoList:FunctionComponent<todoListProps>=()=>{
    return(
        <div>
            <Todos data={mock}/>
        </div>
    )
}