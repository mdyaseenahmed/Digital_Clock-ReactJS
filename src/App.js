import React, { useState } from 'react';
import './App.css';

function App() {

  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(updateTime, 1000)
  return(
    <div className="clock"> 
      <h1>{ctime}</h1>   
      <span>Designed By <strong><a href="https://mdyaseenahmed.netlify.app">Md Yaseen Ahmed</a></strong></span>
    </div>
  );
}

export default App;