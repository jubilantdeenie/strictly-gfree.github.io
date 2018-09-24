import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import SearchPlaces from './components/SearchPlaces.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import * as MapDataAPI from './MapDataAPI.js';

class App extends Component {
 
  state = {
    locations: [],
    originalLocations: [],
    selectedLocation:{},
    newCenter: {lat: 45.5122308, lng: -122.6587185},
    isOpen: false,
    defaultCenter : {lat: 45.5122308, lng: -122.6587185},
    showInfoIndex: -1,
    markerIcon: {},
    defaultMarkerIcon: {},
    zoom: 17, 
    defaultZoom: 15,
    selectedColorBlack: true,
    menuHidden: true
  }
 
  componentWillMount() {
    let icon = {
      url: 'http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png'
    }
    this.setState({
      makerIcon: icon,
      defaultMarkerIcon: icon
    })
  }
 
  render() {
    return (
      <div>
        <Nav
          openNav={this.openNav}
          closeNave={this.closeNav}
          places={this.state.places}
        />
        <Map
         places={this.state.places}
         googleMapURL="https://maps.googleapis.com/maps/api/geocode/json?address=PORTLAND,+OR&key=AIzaSyACxrm7b9GlF8v5fcTtl-VkSxXlM9Y5BcE"
         loadingElement={<div style={{ height: '100%' }} />}
         containerElement={<div style={{height: '800px' }} />}
         mapElement={<div style={{ height: '100%'}} />}
         isOpen={this.state.isOpen}
         selectedMarkerId= {this.state.selectedMarkerId}
         onToggleClass={this.onToggleOpen}
         onToggleClass={this.onToggleClose}
        />
      </div>
    );
  }
}
export default App;

{
  /*

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'

  class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map/>
      </div>
    );
  }
}
export default App;

  ///////////


  <App>
  state = {
    locationsArr: [],
    selectedMarkerIndex: -1,
    center: {} // add default latlng for app
    zoom: {}
  }

  handleMarkerClickEvent = (event, latng, index) => {
    this.setState  ({
      selectedMarker.Index = index, 
      center = latlng // clicked latlng
    })
  }

  handleinfoWindowCloseEvent => {
    // Reset state to default
    this.setstate ({
      selectMarkerIndex = -1,
      center= defaultMapCenter,
      zoom= defaultZoomValue
    })
  }

  //  App.js function
  <ListPlace
  onKeyPressed = this.handleMarkerClickEvent 
  locationArray = {//Foursquare API locations}
  />
  <Map onMarkerClick = this.handleMarkerClickEvent />
  
  </>


  <Map>

      // <CompositeMAPUsingReact onMarkerClick = this.props.onMarkerClick />
  
  </Map>
  */
} 