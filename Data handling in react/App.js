import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import ClassComponent from './components/ClassComponent';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

import { useState } from 'react';



function App() {

  const [inputValue, setInput] = useState("");
  const [showinput, setShowInput] = useState(false);

  function Temp(){
    return <div>This is temporary function</div>
  }

  const changeHandler = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>{ showinput ? inputValue: ""}</h1>

      <input type='text' onChange={changeHandler}></input>

      <button onClick={()=> setShowInput(true)}>ShowData</button>
    
    </div>
  );
}

export default App;
