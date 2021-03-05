import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    height: '100%',
    width: '100%',
    float: 'right'
};

const center = {
    lat: 47.597399424712535, 
    lng: -122.32592148264524
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
                    <Marker position={{ lat: 47.597399424712535, lng: -122.32592148264524 }} />
                </GoogleMap>
            </LoadScript>
        );
    }
}