/*global google*/

import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Polyline, Marker } from "react-google-maps";

const MapElement = withScriptjs(withGoogleMap((props) =>{
   const MapStyles = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c1e34"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#263c3f"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6b9a76"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#38414e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#212a37"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9ca5b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#1f2835"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f3d19c"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c1e34"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c1e34"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#515c6d"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    }
]
	const pathCoordinates = [
        props.starting,
        props.ending
    ];
    var lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 4
};
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	const icon = {url: require("../icons/plane.png"), scaledSize: { width: 32, height: 32 }}
	
  return (
      <GoogleMap
        defaultZoom={10}
        center={ props.starting }

        defaultOptions={{ styles: MapStyles }}
        >	

        <Marker

      position={props.starting}
      icon={icon}
       defaultAnimation={google.maps.Animation.BOUNCE}

    />
            <Marker
      position={props.ending}
      icon={icon}
       defaultAnimation={google.maps.Animation.BOUNCE}
			
    />
                    <Polyline
                path={pathCoordinates}
                geodesic={true}
                options={{
                    strokeColor: "#ffa300",
                    strokeOpacity: 0,
                    strokeWeight: 5,
                    icons: [{
    icon: lineSymbol,
    offset: '0',
    repeat: '20px'
  }]
                }}
            />
      </GoogleMap>
    );
  }
))

export default MapElement