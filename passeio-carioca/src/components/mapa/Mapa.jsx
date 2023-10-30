import {MapContainer,TileLayer,useMap,} from 'https://cdn.esm.sh/react-leaflet'

const position = [-22.986, -43.237]
        
render(
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Você está aqui.
      </Popup>
    </Marker>
  </MapContainer>
)

export default mapa;