import React from 'react';
import axios from 'axios';
import { PageTitle } from './CSSComponents'

class LocationInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <PageTitle>{this.props.city_data.name}</PageTitle>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default LocationInfo;
