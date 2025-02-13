import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css"
import { useState } from 'react';

export default function Search({updateInfo}){
let [city, setCity] = useState("");
let [error,setError]=useState(false)

const API_URL ="http://api.openweathermap.org/data/2.5/weather";
const API_KEY ="74c0d9356f060ed5d2535d2d0ff53ca7";

let getWeatherInfo =async() => {

  try{

    let response = await  fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result ={
      city:city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      weather : jsonResponse.weather[0].description ,
  
    };
    console.log(result);
    return result;
  } catch(err){
    throw err;
  }

};

let handleChanges =(evt) => {
  setCity(evt.target.value);
};

let handleSubmit =async (evt) =>{
try{


  evt.preventDefault();
  console.log(city);
  setCity("");
  let newInfo=await getWeatherInfo();
  updateInfo(newInfo);

}catch(err){
   setError(true);
   
}

};



  return (
  <div className='Search'>
     <h1>Search for weather</h1>
     <form onSubmit={handleSubmit}>
     <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleChanges}/>
    
     &nbsp; &nbsp;
     <Button variant="contained" endIcon={<SearchIcon />} type='submit'>
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such place exists!</p>}
     </form>
  </div>
  );
}