import { useState } from 'react';
import '../index.css'

function UseStateHook (){
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <div className='execution'>
            <h5>
                Understanding the <code>useState</code> Hook
            </h5>
            Button Clicked: {count} times
            <div>
                <button onClick={e=>setCount(count+1)}>Click Button</button>
            </div>
            <div>
                <button onClick={e=>setCount(0)}>Reset</button>
            </div>
            </div>
            <div className='codeDisplay'>
                <code>
                    {'const [count, setCount] = useState(0);'} 
                    </code>
                    <br /><br />
                    defining 'count' as state variable and 'setCount' as function that is used to update state
                    <br />
                    <br />
                <code>
                    {'<button onClick={e=>setCount(count+1)}>Click Button</button>'}
                </code>
            </div>
        </div>
    )
}
export default UseStateHook;