import { useEffect, useState, useRef } from "react"
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import L from 'leaflet'
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import RoutingControl from "./RoutingControl"

type Props = {
	route: boolean,
	startCoords: Array<number>,
	endCoords: Array<number>,
	setMiles: (distance: number) => void
}

function Map({ setMiles, route = false, startCoords = [], endCoords = [] } : Props) {
	const [map, setMap] = useState<L.Map | null>(null);
	//@ts-expect-error Stupid leaflet L is broken
  	const [routingMachine, setRoutingMachine] = useState<L.Routing.Control | null>(null);

	const RoutingMachineRef = useRef(null);

	useEffect(() => {
		if (!map) return
		if (map && route) {
			//@ts-expect-error Stupid leaflet L is broken
			RoutingMachineRef.current = L.Routing.control({
				position: 'topleft', // Where to position control on map
				lineOptions: { // Options for the routing line
				styles: [
					{
					color: '#73c97e',
					},
				],
				},
				waypoints: [startCoords, endCoords],
			})

			setRoutingMachine(RoutingMachineRef.current)
		}
	}, [map]);

	useEffect(() => {
		if (!routingMachine) return
		if (routingMachine && route) {
			routingMachine.addTo(map);
		}
	}, [routingMachine])

	return (
		<div id="map">
			{/*@ts-expect-error Could not give less of a shit to fix this error*/}
			<MapContainer center={[22.42460, 114.21334]} zoom={50} scrollWheelZoom={true} attributionControl={false} whenCreated={(_map) => {setMap(_map)}}>
				{route && <RoutingControl
					startCoord={startCoords}
					endCoord={endCoords}
					setMiles={setMiles}
				/>}
				
				<LayersControl>
					<LayersControl.BaseLayer checked name="Map">
						<TileLayer
							url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
						/>
					</LayersControl.BaseLayer>
				</LayersControl>
			</MapContainer>
		</div>
	)
}

export default Map