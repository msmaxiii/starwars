import { useState,useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import { BrowerRouter} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StarShipCard from './Components/StarShipCard';



function App() {

const [starships,setStarships]= useState([])
const [loading,setLoading]= useState([])


useEffect(() => {
  async function fetchstarships(){
    let res = await fetch ('https://swapi.dev/api/starships/' );
    let data = await res.json();
    setStarships(data.results);
  }
   
  fetchstarships();
  setLoading(false);
    
},[]) 
 console.log('starShips')



  return (
  <>
    

      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>

      <NavBar/>
     
       
          <StarShipCard/>
          <Route exact path ='/starshipcard'
      

  )

     
  }   
  


export default App;
