import React, {useState} from 'react'
import './App.css';
import {Message} from './Message.js'

function App() {
  let [count, setCount] = useState(1);
  return (
    <div>
      <Message counter={count}/>
      <button onClick={()=>setCount(++count)}>Click to Increment</button>
    </div>
  

  )
  }
export default App;
