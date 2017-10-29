import React from 'react';
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const getMarkers = () => {
  var markers = []

  //display annies locations
  markers.push(<Marker
    position={{ lat: 40.4266, lng: -86.9213 }}
    title={"Purdue University - Ann Marie's Current Location"}
    icon={"http://www.googlemapsmarkers.com/v1/A/FF9900/"}
  />)
  markers.push(<Marker
    position={{ lat: 28.6139, lng: 77.2090 }}
    title={"New Delhi, India"}
    icon={"http://www.googlemapsmarkers.com/v1/A/0099FF/"}
  />)
  markers.push(<Marker
    position={{ lat: 35.6892, lng: 51.3890 }}
    title={"Tehran, Iran"}
    icon={"http://www.googlemapsmarkers.com/v1/A/0099FF/"}
  />)
  markers.push(<Marker
    position={{ lat: 33.5731, lng: -7.5898 }}
    title={"Casablanca, Morocco"}
    icon={"http://www.googlemapsmarkers.com/v1/A/0099FF/"}
  />)
  markers.push(<Marker
    position={{ lat: 61.2181, lng: -149.9003 }}
    title={"Anchorage, AK"}
    icon={"http://www.googlemapsmarkers.com/v1/A/0099FF/"}
  />)
  markers.push(<Marker
    position={{ lat: 37.9716, lng: -87.5711 }}
    title={"Evansville, IN"}
    icon={"http://www.googlemapsmarkers.com/v1/A/0099FF/"}
  />)

  //display my locations
  markers.push(<Marker
    position={{ lat: 43.0599, lng: -70.7553 }}
    title={"Portsmouth, NH - Nathan's Current Location"}
    icon={"http://www.googlemapsmarkers.com/v1/N/FF9900/"}
  />)
  markers.push(<Marker
    position={{ lat: 41.6620, lng: -86.1586 }}
    title={"Mishawaka, IN"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 45.5231, lng: -122.6765 }}
    title={"Portland, OR"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 47.6062, lng: -122.3321 }}
    title={"Seattle, WA"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 41.8781, lng: -87.6298 }}
    title={"Chicago, IL"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 40.7128, lng: -74.0060 }}
    title={"New York, NY"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 42.3601, lng: -71.0589 }}
    title={"Boston, MA"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 25.7617, lng: -80.1918 }}
    title={"Miami, FL"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 33.7490, lng: -84.3880 }}
    title={"Atlanta, GA"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 59.3293, lng: 18.0686 }}
    title={"Stockholm, Sweden"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 60.1699, lng: 24.9384 }}
    title={"Helsinki, Finland"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 59.9139, lng: 10.7522 }}
    title={"Oslo, Norway"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 55.6761, lng: 12.5683 }}
    title={"Copenhagen, Denmark"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 52.3702, lng: 4.8952 }}
    title={"Amsterdam, Netherlands"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 48.8566, lng: 2.3522 }}
    title={"Paris, France"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 52.5200, lng: 13.4050 }}
    title={"Berlin, Germany"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: -33.8688, lng: 151.2093 }}
    title={"Sydney, Australia"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)
  markers.push(<Marker
    position={{ lat: 41.9028, lng: 12.4964 }}
    title={"Rome, Italy"}
    icon={"http://www.googlemapsmarkers.com/v1/N/666666/"}
  />)

  //display common locations
  markers.push(<Marker
    position={{ lat: 34.0522, lng: -118.2437 }}
    title={"Los Angeles, CA"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 21.3069, lng: -157.8583 }}
    title={"Honolulu, HI"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 43.6532, lng: -79.3832 }}
    title={"Toronto, Canada"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 51.5074, lng: -0.1278 }}
    title={"London, England"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 35.6895, lng: 139.6917 }}
    title={"Tokyo, Japan"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 37.5665, lng: 126.9780 }}
    title={"Seoul, South Korea"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 53.3498, lng: -6.2603 }}
    title={"Dublin, Ireland"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 41.3851, lng: 2.1734 }}
    title={"Barcelona, Spain"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)
  markers.push(<Marker
    position={{ lat: 39.9042, lng: 116.4074 }}
    title={"Beijing, China"}
    icon={"http://www.googlemapsmarkers.com/v1/B/00FF99/"}
  />)

  return markers;
}

const MapWithAMarker = (compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 40, lng: -80 }}
  >
    {getMarkers()}
  </GoogleMap>
));

export default class Map extends React.Component {
  render() {
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
