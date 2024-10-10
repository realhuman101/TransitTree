import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function Map() {
  return (
	<div id="map">
		<MapContainer center={[22.42460, 114.21334]} zoom={50} scrollWheelZoom={true} attributionControl={false}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	</div>
  )
}

export default Map