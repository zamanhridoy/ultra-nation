import React from 'react';
import'./Countries.css'
const Countries = (props) => {
    const {name, capital, flags} = props.country;
    const addCountry = props.addCountry;
    return (
        <div className="country-container">
            
        <div className='country'>  
            <h4>Name: {name.common} <small> ( {name.official} )</small></h4>
            <p><strong>Capital:</strong> { capital }</p>
            <br />
            <p>Flag</p>
            <div className="img">
                
            <img src={flags.svg} alt="" className='flag' /> 
            </div>
            <button onClick={() => addCountry(props.country)}>ADD</button>
        </div>
        </div>
    );
};

export default Countries;