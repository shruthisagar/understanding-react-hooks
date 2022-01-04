import React, { useState, useEffect, useContext, useReducer } from 'react';
import '../index.css'

const CountContext = React.createContext();

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

function UseReducerHook (){
    const [countState, dispatch] = useReducer(
            countReducer, initialCounterState
        )
    // useEffect(()=>{
    //     console.log("useEffect being called.");
    //     console.log(count)
    //     return () =>{
    //         console.log('clean up function')
    //     }
    // },[count])
    
    return (
        <>
        <div className='container'>
            <div className='execution'>
            <h5>
                Understanding the <code>useReducer</code> Hook
            </h5>
            Button Clicked: {countState.count} times
            <div>
                <button onClick={()=>dispatch({type:'+'})}>+</button>
                <button onClick={()=>dispatch({type:'-'})}>-</button>
            </div>
            <div>
                <button onClick={()=>dispatch({type:'0'})}>Reset</button>
            </div>
            </div>
            <div className='codeDisplay'>
            <h5>
                The code behind it
            </h5>
                <code>
                    {'const [count, setCount] = useState(0);'} 
                    </code>
                    <br /><br />
                    defining 'count' as state variable and 'setCount' as function that is used to update state
                    <br />
                    <br />
                <code>
                    {'<button onClick={()=>setCount((prevVal)=>{return prevVal+1})}>+</button>'}
                </code>
            </div>
            
        </div>
        <hr />
        <h5>Updating property</h5>
        <div className='container'>
            {/* <CountContext.Provider value={count}>
                <NestedComponent />
            </CountContext.Provider> */}
            
        </div>
    </>
    )
}

function NestedComponent() {
    const count = useContext(CountContext)
    return (
        <h3>
            This is a nested component. {count}
        </h3>
    )
}

export default UseReducerHook;