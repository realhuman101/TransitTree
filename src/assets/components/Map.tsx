import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function Map() {
  return (
	<div id="map">
		<MapContainer zoom={13} scrollWheelZoom={false}>

		</MapContainer>
	</div>
  )
}

export default Map