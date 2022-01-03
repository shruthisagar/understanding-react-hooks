import  UseStateHook  from './hooksTutorial/UseStateHook'
import './index.css'
import { useState } from 'react/cjs/react.development';

function App() {
  const [displayHook, setDisplayHook] = useState('initial')
  return (
   <div>
       <h5>Click on either of the buttons to understand how each hook works</h5>
     
     <button className='button'  onClick={()=>setDisplayHook('useState')}> useState </button>  
     {displayHook==='useState'?
     <UseStateHook />:null}
    </div>
  );
}
export default App;
