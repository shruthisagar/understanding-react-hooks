import UseStateHook from './hooksTutorial/UseStateHook'
import UseEffectHook from './hooksTutorial/UseEffectHook'
import UseContextHook from './hooksTutorial/UseContextHook'
import UseReducerHook from './hooksTutorial/useReducerHook'
import UseContextUseReducerHook from './hooksTutorial/UseContextUseReducerHook'
import UseRefHook from './hooksTutorial/UseRefHook'
import UseMemoHook from './hooksTutorial/UseMemoHook'
import UseCallbackHook from './hooksTutorial/UseCallbackHook'
import './index.css'
import ClassCompoent from './hooksTutorial/classComponent'
import { useState } from 'react';

function App() {
  const [displayHook, setDisplayHook] = useState('initial')
  return (
   <div>
       <h5>Click on either of the buttons to understand how each hook works</h5>
     
     <button className='button'  onClick={()=>setDisplayHook('useState')}> useState </button>  
     <button className='button'  onClick={()=>setDisplayHook('useEffect')}> useEffect </button> 
     <button className='button'  onClick={()=>setDisplayHook('useContext')}> useContext </button>
     <button className='button'  onClick={()=>setDisplayHook('useReducer')}> useReducer </button> 
     <button className='button'  onClick={()=>setDisplayHook('useContextUseReducer')}> useContext-useReducer </button> 
     <button className='button'  onClick={()=>setDisplayHook('useRef')}> useRef </button> 
     <button className='button'  onClick={()=>setDisplayHook('useMemo')}> useMemo </button> 
     <button className='button'  onClick={()=>setDisplayHook('useCallback')}> useCallback </button> 
     <button className='button'  onClick={()=>setDisplayHook('ClassCompoent')}> ClassCompoent </button> 
     
     
     {displayHook==='useState'?
     <UseStateHook />:null} 
     {displayHook==='useEffect'?
     <UseEffectHook />:null}
     {displayHook==='useContext'?
     <UseContextHook />:null}
     {displayHook==='useReducer'?
     <UseReducerHook />:null}
     {displayHook==='useContextUseReducer'?
     <UseContextUseReducerHook />:null}
     {displayHook==='useRef'?
     <UseRefHook />:null}
     {displayHook==='useMemo'?
     <UseMemoHook />:null}
     {displayHook==='useCallback'?
     <UseCallbackHook />:null}
     {displayHook === 'ClassCompoent'?
     <ClassCompoent />:null }
     
     
     
    </div>
  );
}
export default App;
