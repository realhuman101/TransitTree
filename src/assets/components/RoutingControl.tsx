import L from "leaflet";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
	startCoord: Array<number>,
	endCoord: Array<number>,
	setMiles: (dist: number) => void
}

interface RoutingEvent {
	routes: Array<{
		summary: {
		totalDistance: number; // Distance in meters
		totalTime: number; // Total time for the route in seconds
		};
	}>;
}  

const RoutingControl = ({ startCoord, endCoord, setMiles }: Props) => {
	const map = useMap();
  
	useEffect(() => {
	  if (!map) return;
  
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
	}, [map, startCoord, endCoord]);
  
	return null;
  };
  
// Export
export default RoutingControl;