import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import './InfoBox.css' ;

export default function InfoBox({info}){
const INIT_URL = "https://media.istockphoto.com/id/184950850/photo/have-a-nice-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ne0gbNpmI4TZyYKed1rl1KvZb4PsbquR5RnOBl9juqU="



return(
    <div className="InfoBox">
    <h2>WeatherInfo - {info.weather}</h2>
    <div className='Card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity >80 ? <ThunderstormIcon/>:
            info.temp > 15 ? <WbSunnyIcon/>:<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}</p>
         <p>Max Temp = {info.tempMax}</p>
         <p>The weather can be described as <i>{info.weather}</i> </p>
        
        </Typography>
      </CardContent>
      
    </Card>
    </div> 
    </div>
    
    
)

}