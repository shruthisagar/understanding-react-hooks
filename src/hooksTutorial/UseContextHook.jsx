import React, { useState, useEffect, useContext } from 'react';
import '../index.css'

const CountContext = React.createContext();

function UseContextHook (){
    const [count, setCount] = useState(0);
    const [objectState, setObjectState] = useState({
        name:'devopedia',
        age: 4
    })
    // useEffect(()=>{
    //     console.log("useEffect being called.");

    //     return () =>{
    //         console.log('clean up function')
    //     }
    // },[])

    // Update when a specific value is only updated -> count here for example

    useEffect(()=>{
        console.log("useEffect being called.");
        console.log(count)
        return () =>{
            console.log('clean up function')
        }
    },[count])
    
    
    // Call every time component is rendered

    // useEffect(()=>{
    //     console.log("useEffect being called.");

    //     return () =>{
    //         console.log('clean up function')
    //     }
    // })
    return (
        <>
        <div className='container'>
            <div className='execution'>
            <h5>
                Understanding the <code>useContext</code> Hook
            </h5>
            Button Clicked: {count} times
            <div>
                <button onClick={()=>setCount((prevVal)=>{return prevVal+1})}>+</button>
                <button onClick={()=>setCount((prevVal)=>{return prevVal-1})}>-</button>
            </div>
            <div>
                <button onClick={e=>setCount(0)}>Reset</button>
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
            <CountContext.Provider value={count}>
                <NestedComponent />
            </CountContext.Provider>
            
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

export default UseContextHook;