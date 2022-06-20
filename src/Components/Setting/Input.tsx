import React, { ChangeEvent } from 'react';
import classApp from '../../App.module.css'

type InputMaxValuePropsType = {
    value: number
    type: string
    statusInput: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    name: string
}

const Input = (props: InputMaxValuePropsType) => {

    return (
        <div>
            <span>{props.name}</span>
            <input className = {props.statusInput ? classApp.inputError : ""} 
                   value={props.value} 
                   type = {props.type} 
                   onChange={props.onChange}
                   />
        </div>
    )

}


export default Input;