import React, {useState} from 'react'
import './App.css';
import {Message} from './Message.js'

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className={`${isMorning ? 'daylight':'box'}`}>
      <h2>Good {isMorning ? 'Morning' : 'Night'}</h2>
      <Message counter={count}/>
      <button className="w3-button w3-deep-purple btnstyle" onClick={()=>setCount(++count)}>Click to Increment</button>
      <button className="w3-button w3-deep-purple btnstyle" onClick={()=>setMorning(!isMorning)}>Check Status</button>
    </div>
  )
  }
export default App;