import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    height: '100%',
    width: '300%'
};

const center = {
    lat: 47.598100,
    lng: -122.327420
}

export class Map extends Component {
    render () {
        return (
            <LoadScript googleMapsApiKey="AIzaSyDIrDW655aBEFlkq8IlN1E07DWhIibDz2k">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        );
    }
}