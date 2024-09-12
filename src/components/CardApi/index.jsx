/* eslint-disable react/prop-types */

import Draggable from 'react-draggable'
import style from './CardApi.module.css'
import { useState } from 'react'


export default function CardApi ({name, gender, image, species, type, status}) {
  // const [visible, setVisible] = useState(false)
  const visible = false
  

  return(
    <>
      <Draggable>
        <div className= {visible ? 'Card' : 'ModalInvisivel'}>
          <h1>{name}</h1>
          <h2>{species}</h2>
          <p>{gender}</p>
          <p>{type}</p>
          <p>{status}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
        </div>
      </Draggable>

      <div className={style.Card}>
          <h1>{name}</h1>
          <h2>{species}</h2>
          <p>{gender}</p>
          <p>{type}</p>
          <p>{status}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
        </div>
    </>
  )
}