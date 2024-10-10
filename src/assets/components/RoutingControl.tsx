import L from "leaflet";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
	startCoord: Array<number>,
	endCoord: Array<number>
}

const RoutingControl = ({ startCoord, endCoord }: Props) => {
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
	  }).addTo(map);
  
	  return () => {map.removeControl(routingControl)};
	}, [map, startCoord, endCoord]);
  
	return null;
  };
  
// Export
export default RoutingControl;