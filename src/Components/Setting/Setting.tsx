import React, { ChangeEvent, useState } from 'react';
import Input     from './Input';
import Button     from '../Button';
import className from '../../App.module.css'
import Span from '../Span';

type SettingPropsType = {
    writeSetting: (min: number, max: number) => void
    showMessageUser: (message: string) => void
    valueMinCounter: number
    valueMaxCounter: number
    setToggeleElement: () => void
    textMessageUser: string
}

const Setting = (props: SettingPropsType) => {
    
    const [minLocalState, setMin] = useState(props.valueMinCounter);
    const [maxLocalState, setMax] = useState(props.valueMaxCounter);

    // ++ для Минимума
    const onChangeMinHundler = (event: ChangeEvent<HTMLInputElement>) => {    
        const min = Number(event.currentTarget.value); 
        if(min > maxLocalState) { console.log(1); props.showMessageUser(messageFromUser(3)); return;}
        if(min < -1) { console.log(2); props.showMessageUser(messageFromUser(2)); return;}
        if(min === -1) { console.log(3); props.showMessageUser(messageFromUser(2)); setMin(min); return;}
        if(min === maxLocalState) { console.log(4); props.showMessageUser(messageFromUser(3)); setMin(min); return;} 
        if(min < maxLocalState) { console.log(5); props.showMessageUser(messageFromUser(1)); setMin(min); return; }
    }
    // -- для Минимума


    // ++ для Максимума
    const onChangeMaxHundler = (event: ChangeEvent<HTMLInputElement>) => {
        const max = Number(event.currentTarget.value);
        if(max > minLocalState && minLocalState >= 0){ props.showMessageUser( messageFromUser(1) ); setMax(max); return; }
        if(max === minLocalState) {props.showMessageUser( messageFromUser(3)); setMax(max); return; }
    }
    // -- для Максимума


    // ++Служебные
    // записывает настройки
    const onClickHundler = () => {
        props.writeSetting(minLocalState, maxLocalState);
        props.showMessageUser("")
    }

    function messageFromUser(numberMessage: number){ 
        if(numberMessage === 1) return "Запишите введенные настройки!";
        if(numberMessage === 2) return "Значение должно быть больше или равно 0";
        if(numberMessage === 3) return "Min должно быть меньше Max";
        return "";
    }

    const getStatusInputMin = minLocalState === maxLocalState || minLocalState < 0;
    const getStatusInputMax = minLocalState === maxLocalState || maxLocalState < 0;
    const getStatusElement = (props.textMessageUser !== "Запишите введенные настройки!" && props.textMessageUser !== "");
    // --Служебные

    return (
        <div className = {className.setting}>

            <Input type = {"number"} 
                   name = {"min"}
                   statusInput = {getStatusInputMin}
                   value = {minLocalState} 
                   onChange = {onChangeMinHundler} 
                />

            <Input type = {"number"} 
                   name = {"max"}
                   statusInput = {getStatusInputMax} 
                   value = {maxLocalState} 
                   onChange = {onChangeMaxHundler}
            />

            {
                props.textMessageUser 
                && <Span title = {props.textMessageUser} 
                         className = {!getStatusElement ? className.messageUser : className.messageUserError} 
                    />
            }

            <Button buttonName = {"Set"} 
                    statusButton = {getStatusElement} 
                    onClick = {onClickHundler}
                />

        </div>
    )
}


export default Setting;