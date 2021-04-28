import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const KEY = process.env.REACT_APP_MAPS_API_KEY;

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {

  continue = (event) => {
    event.preventDefault();
    this.props.nextView();
  }

  back = (event) => {
    event.preventDefault();
    this.props.previousView();
  }

  render() {
    return (
      <div>
              <h1>hello</h1>
              <button onClick={this.continue}>next</button>
              <button onClick={this.back}>back</button>



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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY
})(MapContainer);