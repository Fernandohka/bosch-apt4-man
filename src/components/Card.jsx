/* eslint-disable react/prop-types */

import style from './Card.module.css'

export const Card = ({id, name, desc, value, image, categoria, status}) => {
  return(
    <div className={style.Card}>
        <div className={status ? style.BolinhaVerde: style.BolinhaVermelha}></div>
        <h1>{name}</h1>
        <h2>{value}</h2>
        <p>{desc}</p>
        <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}