import { useState, useEffect } from 'react'
import style from './App.module.css'
import CardApi from './components/CardApi'
import { api } from "./api/rmApi"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Api() {
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
        <div  className={style.wrapPage}>
          <ToastContainer/>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="nome" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.CardBox}>
            {data.map((item, index) => { 
             return(
              <div key={index}>
                <CardApi name={item.name} species={item.species} gender={item.gender} image={item.image} type={item.type} status={item.status} />
                <button onClick={() => {}}>Info</button>
              </div>
              )
           })}
            </div>
       </div>
    )
}

export default Api