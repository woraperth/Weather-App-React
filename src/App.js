// Import libraries
import React from 'react'
// Import components
import LocationImage from './components/LocationImage'
import LocationInfo from './components/LocationInfo'
import { PageWrapper, LeftHalf, RightHalf, SelectorWrapper, SelectorItem } from './components/CSSComponents'
// Import data
import LocationData from './LocationData'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city_list: LocationData,
      current_city: LocationData[0],
      weather_mode: 'c' // 'c' or 'f'
    };

    // Select Temperature Mode
    this.temp_list = [{
      mode: 'c',
      name: '°C'
    },{
      mode: 'f',
      name: '°F'
    }]
  }

  render() {
    return <PageWrapper>
      <LeftHalf>
        <LocationImage city_name={this.state.current_city.name} />
      </LeftHalf>
      <RightHalf>
        <SelectorWrapper>
          <div>Select City: {this.generate_city_selector()}</div>
          Select Temp Unit: {this.generate_temp_selector()}
        </SelectorWrapper>
        <LocationInfo city_data={this.state.current_city} mode={this.state.weather_mode} />
      </RightHalf>
    </PageWrapper>;
  }

  generate_city_selector() {
    return this.state.city_list.map((city) => {
      return <SelectorItem key={city.name} onClick={this.select_city.bind(this, city)} active={city.name === this.state.current_city.name}>{city.name}</SelectorItem>
    })
  }

  generate_temp_selector() {
    return this.temp_list.map((temp) => {
      return <SelectorItem key={temp.mode} onClick={this.select_mode.bind(this, temp.mode)} active={temp.mode === this.state.weather_mode}>{temp.name}</SelectorItem>
    })
  }

  // Select temperature mode
  select_mode(mode) {
    this.setState({
      weather_mode: mode
    })
    // Update Local Storage
    localStorage.setItem('weather_mode', mode)
  }

  // Select city name
  select_city(city) {
    this.setState({
      current_city: city
    })
    // Update Local Storage
    localStorage.setItem('current_city', JSON.stringify(city))
  }

  componentDidMount() {
    // Check if there is local storage, load data from cache
    const cached_weather_mode = localStorage.getItem('weather_mode');
    if (cached_weather_mode) {
      this.setState({ weather_mode: cached_weather_mode });
    }
    const cached_city = localStorage.getItem('current_city');
    if (cached_city) {
      this.setState({ current_city: JSON.parse(cached_city) });
    }
  }
}

export default App;
