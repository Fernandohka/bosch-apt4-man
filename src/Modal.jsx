import Draggable from 'react-draggable'
import style from './App.module.css'

function Produtos(props) {
  
    return (
        <Draggable>
        <div className= {style.Modal}>
          <h1>{props.data.name}</h1>
          <h2>{props.data.species}</h2>
          <p>{props.data.gender}</p>
          <p>{props.data.type}</p>
          <p>{props.data.status}</p>
          <img src={props.data.image} alt={props.data.name} width={150} height={"auto"}/>
        </div>
      </Draggable>
    )
}

export default Produtos