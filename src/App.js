import  UseStateHook  from './hooksTutorial/UseStateHook'
import  UseEffectHook  from './hooksTutorial/UseEffectHook'
import  UseContextHook  from './hooksTutorial/UseContextHook'
import './index.css'
import { useState } from 'react';

function App() {
  const [displayHook, setDisplayHook] = useState('initial')
  return (
   <div>
       <h5>Click on either of the buttons to understand how each hook works</h5>
     
     <button className='button'  onClick={()=>setDisplayHook('useState')}> useState </button>  
     <button className='button'  onClick={()=>setDisplayHook('useEffect')}> useEffect </button> 
     <button className='button'  onClick={()=>setDisplayHook('useContext')}> useContext </button> 
     {displayHook==='useState'?
     <UseStateHook />:null}
      
     {displayHook==='useEffect'?
     <UseEffectHook />:null}
     {displayHook==='useContext'?
     <UseContextHook />:null}
    </div>
  );
}
export default App;
