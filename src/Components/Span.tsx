import React from 'react';
import className from '../App.module.css'
//className = {className.button}

type SpanPropsType = {
    title: string
    className: string
}

const Span = (props: SpanPropsType) => {
    return (
        <div >
            <span className = {props.className}>
                {props.title}
            </span>
        </div>
    )
}


export default Span;