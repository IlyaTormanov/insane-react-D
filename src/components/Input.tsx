import * as React from 'react'
import {DetailedHTMLProps, FunctionComponent, InputHTMLAttributes} from "react";

export interface inputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'onChange'>{
    onChange:(value:string)=>void
}

export const Input:FunctionComponent<inputProps>=(props)=>{
    return(
        <input onChange={event => props.onChange(event.target.value)}/>
    )
}