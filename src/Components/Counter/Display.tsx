import React from 'react';
import classApp from '../../App.module.css';

type displayPropsType = {
    counter: number | string
    statusCounet: boolean
}

const Display = (props: displayPropsType) => {
    return (
        <div className = {props.statusCounet ? classApp.counterError : ""} > { props.counter } </div>
    )
}

export default Display;

