import React from 'react';
import className from '../App.module.css'

type buttonPropsType = {
    onClick: () => void
    statusButton?: boolean
    buttonName: string
}

const Button = (props: buttonPropsType) => {

    return (
        <div className = {className.button}>
            <button disabled = {props.statusButton} onClick = {props.onClick}>
                {props.buttonName}
            </button>
        </div>
    )

}


export default Button;