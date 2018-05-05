// Import libraries
import React from 'react'
// Import components
import LocationImage from './components/LocationImage'
import LocationInfo from './components/LocationInfo'
import { PageWrapper, LeftHalf, RightHalf, SelectorWrapper, SelectorItem } from './components/CSSComponents'
// Import data
import LocationData from './LocationData'
import WeatherDesc from './WeatherDesc'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city_list: LocationData,
      current_city: LocationData[0]
    };
  }

  render() {
    return <PageWrapper>
      <LeftHalf>
        <LocationImage city_name={this.state.current_city.name} />
      </LeftHalf>
      <RightHalf>
        <SelectorWrapper>
          Select City: {this.generate_city_selector()}
        </SelectorWrapper>
        <LocationInfo city_data={this.state.current_city} />
      </RightHalf>
    </PageWrapper>;
  }

  generate_city_selector() {
    return this.state.city_list.map((city) => {
      return <SelectorItem key={city.name} onClick={this.select_city.bind(this, city)} active={city.name === this.state.current_city.name}>{city.name}</SelectorItem>
    })
  }

  select_city(city) {
    this.setState({
      current_city: city
    })
  }

  componentDidMount() {
  }
}

export default App;
