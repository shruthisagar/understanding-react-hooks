import React, { useState, useEffect, useContext, useReducer } from 'react';
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

function UseContextUseReducerHook (){
    const [countState, dispatch] = useReducer(
            countReducer, initialCounterState
        );
    
    const [colorState, colorDispatch] = useReducer(
        colorReducer, initialColorState
    );
    
    // useEffect(()=>{
    //     console.log("useEffect being called.");
    //     console.log(count)
    //     return () =>{
    //         console.log('clean up function')
    //     }
    // },[count])
    
    return (
        <>
        <h5>Updating using dispatch</h5>
        <div className='container'>
            <div className='codeExecution'>
                <ColorContext.Provider value={{colorState, colorDispatch}}>
                    <NestedComponent />
                </ColorContext.Provider>
            
                <button
                onClick={()=>{
                    if(colorState.color=='red'){
                        colorDispatch({type:'set', color: 'blue'})
                    }
                    if(colorState.color=='blue'){
                        colorDispatch({type:'set', color: 'red'})
                    }
                }}>
                    Switch Color
                </button>
            </div>
        </div>
    </>
    )
}

function NestedComponent() {
    const {colorState} = useContext(ColorContext)
    return (
        <h3 style={{color: colorState.color}}>
            This is a nested component
        </h3>
    )
}

export default UseContextUseReducerHook;