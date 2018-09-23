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

{
  /*
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