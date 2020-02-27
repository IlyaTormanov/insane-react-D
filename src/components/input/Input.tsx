import * as React from 'react'
import {DetailedHTMLProps, FunctionComponent, InputHTMLAttributes} from "react";
import styles from './input.module.scss'
export interface inputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'onChange'>{
    onChange:(value:string)=>void,
}

export const Input:FunctionComponent<inputProps>=(props)=>{
    const {onChange, ...rest} = props;
    return(
        <input onChange={event => onChange(event.target.value)} className={styles.input} {...rest}/>
    )
}