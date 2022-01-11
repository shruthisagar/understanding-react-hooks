import React, { 
    useState, 
    useEffect, 
    useContext, 
    useReducer,
    useRef, 
    useMemo, 
    useCallback 
} from 'react';
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

function UseMemoHook (){
    const [countState, dispatch] = useReducer(
            countReducer, initialCounterState
        );
    
    const [colorState, colorDispatch] = useReducer(
        colorReducer, initialColorState
    );
    const counterSqrt = useMemo(() =>{
        console.log('calculating')
        return Math.sqrt(countState.count)
    }, [countState.count])
    
    // useEffect(()=>{
    //     console.log("useEffect being called.");
    //     console.log(count)
    //     return () =>{
    //         console.log('clean up function')
    //     }
    // },[count])
    const inputElementReference = useRef(null);

    useEffect(()=>{
        inputElementReference.current.focus();
    },[])
    return (
        <>
        <h5>Use Memo Hook</h5>
        <div className='container'>
            <div className='codeExecution'>
                <ColorContext.Provider value={{colorState, colorDispatch}}>
                    <NestedComponent />
                </ColorContext.Provider>
                Button Clicked: {countState.count} times
            <div>
                <button onClick={()=>dispatch({type:'+'})}>+</button>
                <button onClick={()=>dispatch({type:'-'})}>-</button>
            </div>
            <div>
                <button onClick={()=>dispatch({type:'0'})}>Reset</button>
            </div>
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
                <p>
                    the square root is {counterSqrt}
                </p>
                <div>
                    <input type="text" ref={inputElementReference} placeholder='This should be focused'/>
                </div>
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

export default UseMemoHook;