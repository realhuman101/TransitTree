import L from "leaflet";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useEffect } from "react";
import { useMap } from "react-leaflet";
// import mapboxgl from "mapbox-gl";
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import "leaflet/dist/leaflet.css";

type Props = {
	startCoord: Array<number>,
	endCoord: Array<number>,
	setMiles: (dist: number) => void,
	mode: 'public' | 'private'
}

interface RoutingEvent {
	routes: Array<{
		summary: {
		totalDistance: number; // Distance in meters
		totalTime: number; // Total time for the route in seconds
		};
	}>;
}  

const RoutingControl = ({ startCoord, endCoord, setMiles, mode }: Props) => {
	const map = useMap();
  
	useEffect(() => {
	  if (!map) return;
  
	//   if (mode === 'public') {
	// 		// Set up Mapbox token and integrate directions
    //         mapboxgl.accessToken = 'sk.eyJ1IjoiYWp5YWt1IiwiYSI6ImNtMjV0ZGh6cTBxdW4ya3M2MmhqM2x1bmoifQ.1BlXGULcPgJMs45zifjbNw'; // Replace with your Mapbox Access Token

    //         const directions = new MapboxDirections({
    //             accessToken: mapboxgl.accessToken,
    //             unit: 'metric',
    //             profile: 'mapbox/transit', 
    //             controls: {
    //                 inputs: false, 
    //             },
    //         });

    //         // map.addControl(directions, 'top-left');

    //         directions.setOrigin([startCoord[1], startCoord[0]]);
    //         directions.setDestination([endCoord[1], endCoord[0]]);

    //         directions.on('route', (event) => {
    //             if (event.route && event.route.length > 0) {
    //                 const route = event.route[0];
    //                 const distanceMeters = route.distance; // Distance is in meters
    //                 setMiles(distanceMeters / 1609.34); // Convert meters to miles
    //             }
    //         });

    //         // Cleanup function to remove directions when component unmounts
    //         return () => {
    //             map.removeControl(directions);
    //         };
	//   }
	//   else {
		//@ts-expect-error Stupid leaflet L is broken
		const routingControl = L.Routing.control({
			waypoints: [
			L.latLng(startCoord[0], startCoord[1]),
			L.latLng(endCoord[0], endCoord[1]),
			],
			routeWhileDragging: true,
			lineOptions: {
				styles: [{ color: '#61c273', weight: 6 }], // Customizing the route color and width
			},		
		}).on('routesfound', function (e: RoutingEvent) {
			const routes = e.routes;
			const summary = routes[0].summary;
			const distance = summary.totalDistance;
			setMiles(distance);
		}).addTo(map);
	
		return () => {map.removeControl(routingControl)};
		// };
	
	}, [map, startCoord, endCoord, mode]);

	return null;
  };
  
// Export
export default RoutingControl;