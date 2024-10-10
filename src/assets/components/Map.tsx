import React, { useEffect, useState, useRef } from "react"
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import L from 'leaflet'

type Props = {
	route: boolean,
	startCoords?: Array<number>,
	endCoords?: Array<number>
}

function Map({ route = false, startCoords = undefined, endCoords = undefined } : Props) {
	const [map, setMap] = useState(null);
  	const [routingMachine, setRoutingMachine] = useState(null);

	const RoutingMachineRef = useRef(null);

	useEffect(() => {
		if (!map) return
		if (map && route) {
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
			<MapContainer center={[22.42460, 114.21334]} zoom={50} scrollWheelZoom={true} attributionControl={false} whenCreated={(_map) => {setMap(_map)}}>
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