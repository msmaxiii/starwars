
import './App.css';
import { render} from "react-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const [state,setState]= useState('')


useEffect(async() => {
  const res = await axios.get(
    'https://swapi.dev/api/starships/' 
  )},[])
 


function App() {
  return (
    <div className="App">
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>
      
    </div>
  );
}

export default App;
