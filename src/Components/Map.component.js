import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const KEY = process.env.REACT_APP_MAPS_API_KEY;

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 44.9778,
            lng: -93.2650
        
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY
})(MapContainer);