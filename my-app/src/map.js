import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const Map = compose(
    withScriptjs,
    withGoogleMap
)(props =>
<GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 45.5122308, lng: -122.6587185}}
>
    {props.places.map(place => {
        const {lat, lng } = place.venue.location;
        let markersElement = <Marker
        id={place.venue.id}
        name={place.venue.name}
        street={place.venue.location.formattedAddress[0]}
        address={place.venue.location.formattedAddress[1]}
        position={{ lat, lng }}
        onClick={props.onToggleOpen}
        >
        {props.isOpen && props.selectedMarkerId === place.venue.id) && <InfoWindow>
            <div>
                <h1>Name</h1>
                <p>{place.venue.name}</p>
                <h2>Address: </h2>
                <p>{place.venue.location.formattedAddress[0]</p>
                <p>{place.venue.location.formattedAddress[1]</p></p>
            </div>
    }
        </Marker>
    })}
</GoogleMap>
)


class Map extends Component {
    render() {
        return (
         <div>Map Template</div>   
        );
    }
};

export default Map;