import React, { useState, useEffect, useContext, useReducer, useRef } from 'react';
import '../index.css'

const ColorContext = React.createContext();

const initialColorState = {
    color:'blue'
}

const colorReducer = (state, action)=>{
    if(action.type=='set'){
        return {
            ...state,
            color: action.color
        }
    }
}

const initialCounterState = {
    count:0
}

const countReducer = (state, action) =>{
    if(action.type == '+'){
        return {
            ...state,
            count: state.count + 1
        }
    }
    else if(action.type == '-'){
        return {
            ...state,
            count: state.count - 1
        }
    }
    else if(action.type =='0'){
        return {
            ...state,
            count:0
        }
    }
}

function UseRefHook (){
    const [countState, dispatch] = useReducer(
            countReducer, initialCounterState
        );
    
    const [colorState, colorDispatch] = useReducer(
        colorReducer, initialColorState
    );
    
    const inputElementReference = useRef(null);

    useEffect(()=>{
        inputElementReference.current.focus();
    },[])

    return (
        <>
        <h5>Using Ref Hook</h5>
        <div className='container'>
            <div className='codeExecution'>
                
                <div>
                    <input type="text" ref={inputElementReference} placeholder='This should be focused'/>
                </div>
            </div>
        </div>
    </>
    )
}

export default UseRefHook;