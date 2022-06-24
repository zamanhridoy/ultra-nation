import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './component/Countries/Countries';

function App() {

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(eror => console.log(eror))
    })

  const [countries, setCountries] = useState([]);
console.log(countries); 

const [add, setAdd] = useState([]);
const addCountry = (country) =>{
  const newAdd = [...add, country ];
  setAdd(newAdd)
}

// -----------------------------------

// const population = country.population;
const totalPopulation = add.reduce((sum, country) => sum + country.population ,0)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{position:'fixed', top:'0', backgroundColor:'tomato', padding:'10px', width:'100%'}} className="container">
        <h4> Added: {add.length}</h4>
        <p> Total Popualtion: {totalPopulation}</p>
        </div>
       <div style={{marginTop:'150px'}}>
       {
        countries.map(country => <Countries country = {country} addCountry ={addCountry}></Countries>)
       }
        
       </div>
      </header>
    </div>
  );
}

export default App;
