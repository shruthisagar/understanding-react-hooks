import { useState } from 'react';
import '../index.css'

function UseStateHook (){
    const [count, setCount] = useState(0);
    const [objectState, setObjectState] = useState({
        name:'devopedia',
        age: 4
    })
    return (
        <>
        <div className='container'>
            <div className='execution'>
            <h5>
                Understanding the <code>useState</code> Hook
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
            <div className='execution'>
            <h5>
                Understanding the <code>useState</code> Hook
            </h5>
            Name: {objectState.name}
            <br />
            Age: {objectState.age || 'cleared'}
            <div>
                <button onClick={()=>setObjectState((prevVal)=>{return {name:'Shruthi Sagar'}})}>Update Object</button>
                <button onClick={()=>setObjectState((prevVal)=>{return {...objectState, name:'Shruthi Sagar'}})}>Update Name</button>
                <button onClick={()=>setObjectState((prevVal)=>{return {name:'devopedia', age: 4}})}>Reset</button>
            </div>
            </div>
            <div className='codeDisplay'>
            <h5>
                The code behind it
            </h5>
            <code>
                {"<button onClick={()=>setObjectState((prevVal)=>{return {name:'Shruthi Sagar'}})}>Update Object</button>"} <br/>
                {"<button onClick={()=>setObjectState((prevVal)=>{return {...objectState, name:'Shruthi Sagar'}})}>Update Name</button>"}<br />
                {"<button onClick={()=>setObjectState((prevVal)=>{return {name:'devopedia', age: 4}})}>Reset</button>'}"}
            </code>
            </div>
            
        </div>
    </>
    )
}
export default UseStateHook;