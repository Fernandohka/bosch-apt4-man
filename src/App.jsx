import { useState, useEffect } from 'react'
import CardProdutos from './components/CardProdutos'
import CardApi from './components/CardApi'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")


  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        toast("Esta pagina nao contem este personagem", {
          position: 'top-right',
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "blue",
            color: "white"
          }
        });

        setData([]);
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <>
    <ToastContainer/>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.CardBox}>
            {produtos.map((item) => {
              return(
                <CardProdutos name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="nome" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.CardBox}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <CardApi name={item.name} species={item.species} gender={item.gender} image={item.image} type={item.type} status={item.status} />
                <button onClick={() => {}}>Info</button>
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
      <MapContainer center={[-25.4248819,-49.273013]} zoom={15} scrollWheelZoom={false} style={{width: "400px", height: "400px"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-25.4248819,-49.273013]}>
          <Popup>
            Senai
          </Popup>
        </Marker>
      </MapContainer>
         </>
      }
    </div>
    </>
  )
}

export default App
