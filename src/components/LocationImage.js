import React from 'react';
import axios from 'axios';
import { FullScreenBox } from './CSSComponents'
import { API_Unsplash } from './APIURL'

class LocationImage extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundURL: '',
    };
  }

  render() {
    return <div>
      <FullScreenBox url={this.state.backgroundURL} />
    </div>
  }

  componentDidMount() {
    // Load image from keyword
    this.load_image( this.props.city_name )
  }

  componentWillReceiveProps(nextprops) {
    let next_city_name = nextprops.city_name
    this.load_image( next_city_name )
  }

  // Load Image from Unsplash API
  load_image(city_name) {
    axios.get(API_Unsplash + city_name)
      .then(res => {
        // Select Random Image (from 5 images)
        let results = res.data.results
        let rand_result = results[Math.floor(Math.random() * results.length)]
        // Set State
        this.setState({ backgroundURL: rand_result.urls.regular });
      })
  }
}

export default LocationImage;
