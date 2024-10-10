import { MapContainer, TileLayer } from 'react-leaflet'

function Map() {		
	return (
		<div id="map">
			<MapContainer center={[22.42460, 114.21334]} zoom={50} scrollWheelZoom={true} attributionControl={false}>
				<TileLayer
					url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
				/>
			</MapContainer>
		</div>
	)
}

export default Map