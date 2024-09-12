import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from './App.module.css'

function Mapa() {
  
    return (
        <div  className={style.wrapPage}>
          <h2>Mapa</h2>
          <MapContainer center={[-25.4248819,-49.273013]} zoom={15} scrollWheelZoom={false} style={{width: "400px", height: "400px"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <Marker position={[-25.4248819,-49.273013]}>
              <Popup>
                Senai
              </Popup>
            </Marker>

          </MapContainer>
        </div>
    )
}

export default Mapa