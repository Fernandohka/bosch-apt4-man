/* eslint-disable react/prop-types */


import style from './CardApi.module.css'


export default function CardApi ({name, gender, image, species, type, status}) {
  
  return(
    <>
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