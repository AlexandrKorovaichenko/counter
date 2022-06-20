import React, { useEffect, useState } from 'react';
import Display   from './Display';
import Button from '../Button';
import className from '../../App.module.css'

type CounetrPropsType = {
    textMessageUser: string
    valueMinCounter: number
    valueMaxCounter: number
    setToggeleElement: () => void
}

const Counter = (props: CounetrPropsType) => {

    let[counter, setCouter] = useState<number>(props.valueMinCounter);

    useEffect(() => {
        setCouter(props.valueMinCounter);
    }, [props.valueMinCounter])

    function getStatusIncrement(){ return counter === props.valueMaxCounter || props.textMessageUser !== "" }
    function getStatusCounter(){ return counter === props.valueMaxCounter || counter === props.valueMinCounter}
    function getStatusReset(){ return counter === props.valueMinCounter || props.textMessageUser !== "" }

    function onClickIncrementHundler(){
        setCouter(counter + 1);
    }
    
    function onClickResetHundler(){
        setCouter(props.valueMinCounter)
    }

    function onClickSetHundler(){
        props.setToggeleElement();
    }

    return (
        <div className = {className.counter}>
            
            <Display statusCounet = {getStatusCounter()} 
                     counter = {props.textMessageUser || counter}
            />
            
            <Button onClick = {onClickIncrementHundler}  
                    statusButton = {getStatusIncrement()} 
                    buttonName = {"increment"}
            />

            <Button onClick = {onClickResetHundler}      
                    statusButton = {getStatusReset()}     
                    buttonName = {"reset"}
            />

            <Button onClick = {onClickSetHundler}           
                    buttonName = {"set"}
            />

        </div>
    )

}


export default Counter;