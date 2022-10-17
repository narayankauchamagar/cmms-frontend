import React, { useState, useEffect } from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { mapStyle } from './mapStyle';
import { googleMapsConfig } from '../../../../config';

interface MapProps {
  dimensions?: { width: number; height: number };
}
export default function Map({ dimensions }: MapProps) {
  const { apiKey } = googleMapsConfig;
  const coordinates = {
    lat: 40.744509157650334,
    lng: -74.06030716227161
  };
  const Map = () => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={coordinates}
      defaultOptions={{ styles: mapStyle }}
    >
      <Marker
        position={coordinates}
        icon={{
          url: '/static/images/markers/red.png',
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />
    </GoogleMap>
  );
  const MapWrapped = withScriptjs(withGoogleMap(Map));

  return (
    <div
      style={{
        width: dimensions.width ?? 500,
        height: dimensions.height ?? 500
      }}
    >
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
