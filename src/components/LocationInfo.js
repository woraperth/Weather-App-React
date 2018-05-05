import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { PageTitle, Subtitle, ChartWrapper, WeatherTemp, WeatherDescr, WeatherIcon } from './CSSComponents'
import { API_Weather_Current, API_Weather_Forecast } from './APIURL'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import WeatherDesc from './WeatherDesc'

class LocationInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {},
      currentForecast: []
    };
  }

  render() {
    return <div>
      <PageTitle>{this.props.city_data.name}</PageTitle>
      <div>
        <Subtitle>Current Weather:</Subtitle>
        <div>
          <WeatherDescr>{this.state.currentWeather.desc}</WeatherDescr>
          <WeatherIcon><img src={this.state.currentWeather ? process.env.PUBLIC_URL + '/weather-icons/' + this.state.currentWeather.img : ''} /></WeatherIcon>
          <WeatherTemp>{this.state.currentWeather.temp}° {this.props.mode.toUpperCase()}</WeatherTemp>
        </div>
      </div>
      <div>
        <Subtitle>7-Days Forecast:</Subtitle>
        <ChartWrapper>
          <ResponsiveContainer width='100%' height={250}>
            <BarChart data={this.state.currentForecast}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="temp" name="Low - High" fill="#007a47" />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </div>
    </div>;
  }

  componentDidMount() {
    // Load current weather
    this.get_current_weather(this.props.city_data.location)
    this.get_forecast_weather(this.props.city_data.location)
  }

  componentWillReceiveProps(nextprops) {
    let next_city_location = nextprops.city_data.location
    this.get_current_weather( next_city_location )
    this.get_forecast_weather( next_city_location )
  }

  // Load Current Weather
  get_current_weather(city_location) {
    axios.get( API_Weather_Current(city_location) )
      .then(res => {
        let current_temp = res.data['temp_' + this.props.mode]
        let current_desc = WeatherDesc[res.data.wx_code].en
        let current_img = res.data.wx_icon
        // Set State
        this.setState({ currentWeather: {
          temp: current_temp,
          desc: current_desc,
          img: current_img
        } });
      })
  }

  // Load Forecast Weather
  get_forecast_weather(city_location) {
    axios.get( API_Weather_Forecast(city_location) )
      .then(res => {
        let forecast_ary = []

        let forecast_data = res.data.Days
        for(var i = 0; i < forecast_data.length; i++) {
          let forecast_item = forecast_data[i]
          forecast_ary.push( {
            date: moment(forecast_item.date, "DD/MM/YYYY").format('ddd D MMM'),
            temp: [ forecast_item['temp_min_' + this.props.mode], forecast_item['temp_max_' + this.props.mode] ]
          } )
        }

        // Set State
        this.setState({ currentForecast: forecast_ary});
      })
  }
}

export default LocationInfo;
