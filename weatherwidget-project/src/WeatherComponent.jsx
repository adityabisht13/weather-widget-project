import Search from "./Search";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherComponent(){
    const[weatherInfo,setWeatherInfo]=useState({
    city: "Delhi",
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather : "haze" ,
    });

 let updateInfo =(newInfo) => {
    setWeatherInfo(newInfo);
 };   
 

  
        



 return(
     <div >
       
        <Search updateInfo={updateInfo} />
        <InfoBox  info={weatherInfo}/>
     </div>

 );

}