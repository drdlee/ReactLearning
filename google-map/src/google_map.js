/*global google*/
import React, {Component} from 'react';
import './google_map.css';

class GoogleMap extends Component{
  shouldComponentUpdate(){
    return false;
  }
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: -6.121435,
        lng: 106.774124
      }
    });
  }

  render(){
    return <div>From Map<div ref="map" id="map"/></div>;
  }
}

export default GoogleMap;
