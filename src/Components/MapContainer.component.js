import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Button } from "@material-ui/core"

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
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter= {
          {
            lat: 44.9778,
            lng: -93.2650
          }
        }
        
        />
        <Button variant="contained" onClick={this.continue}>next</Button>
        <Button variant="contained" onClick={this.back}>back</Button>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY
})(MapContainer);