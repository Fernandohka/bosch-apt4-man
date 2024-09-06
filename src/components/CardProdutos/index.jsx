/* eslint-disable react/prop-types */

import style from './CardProdutos.module.css'

export default function CardProdutos ({id, name, desc, value, image, categoria, status}) {
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