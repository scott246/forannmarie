import React from 'react';
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

var markers = []

const MapWithAMarker = (compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 40, lng: -80 }}
  >
    {markers}
  </GoogleMap>
));

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

  componentWillMount = () => {
		this.getLocations();
	}

  getLocations = () => {
  	fetch('/locations')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(fetchedLocations => {
        this.setState({
          locations: fetchedLocations
        });
      }).catch(e => {
        this.setState({
          locations: `API call failed (distance.js): ${e}`
        });
      })
  }

  mapMarkers = () => {
    for (var i = 0; i < this.state.locations.length; i++) {
      console.log(this.state.locations[i].latitude);
      var latitude = parseFloat(this.state.locations[i].latitude);
      var longitude = parseFloat(this.state.locations[i].longitude);
      var pos = {lat: latitude, lng: longitude}
      markers.push(<Marker
        position={pos}
        title={this.state.locations[i].title}
        icon={this.state.locations[i].icon}
      />)
    }
  }

  render() {
    this.mapMarkers();
    return (
      <div className="DistanceTile">
        <div className="TileTitle">Travel Plans</div>
        <hr />
        <div>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyApv8finV0L1eKn2vnSHKJrFyF-OoMaUkA&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <span> A = Ann Marie, B = Both, N = Nathan </span>
        </div>
      </div>
    );
  }
}
