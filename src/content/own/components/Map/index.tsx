import React, { useState, useEffect, useRef } from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { mapStyle } from './mapStyle';
import { googleMapsConfig } from '../../../../config';
import { Box, Link, Typography } from '@mui/material';

interface Location {
  id: number;
  title: string;
  address: string;
  coordinates: { lat: number; lng: number };
}
interface MapProps {
  dimensions?: { width: number; height: number };
  locations?: Location[];
}

function LocalMap({ locations }) {
  const mapRef = useRef<GoogleMap>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location>();

  useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((location) => bounds.extend(location.coordinates));
    mapRef.current.fitBounds(bounds);
  }, [mapRef]);

  return (
    <GoogleMap
      ref={mapRef}
      defaultZoom={10}
      defaultOptions={{ styles: mapStyle }}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.coordinates}
          title={location.title}
          onClick={() => setSelectedLocation(location)}
          icon={{
            url: '/static/images/markers/red.png',
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}
      {selectedLocation && (
        <InfoWindow
          onCloseClick={() => setSelectedLocation(null)}
          position={selectedLocation.coordinates}
        >
          <Box>
            <Link
              variant="h6"
              color="primary"
              href={`/app/locations/${selectedLocation.id}`}
            >
              {selectedLocation.title}
            </Link>
            <Typography variant="subtitle1">
              {selectedLocation.address}
            </Typography>
          </Box>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
export default function Map({ dimensions, locations }: MapProps) {
  const { apiKey } = googleMapsConfig;

  const MapWrapped = withScriptjs(
    withGoogleMap(() => <LocalMap locations={locations} />)
  );

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
