import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../Services/weather.service';

@Component({
  selector: 'app-todaysweather',
  templateUrl: './todaysweather.page.html',
  styleUrls: ['./todaysweather.page.scss'],
})
export class TodaysweatherPage implements OnInit {

  weatherData:any = []

  constructor(private service:WeatherService) { }

  ngOnInit(): void
  {
      this.service.GetWeatherData().subscribe(
        (dataw)=>
        {
          this.weatherData = dataw.weather;
          console.log(this.weatherData);
        }
      )

      
      
    
  }

}
