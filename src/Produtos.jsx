import produtos from './constants/produtos.json'
import CardProdutos from './components/CardProdutos'
import style from './App.module.css'

function Produtos() {
  
    return (
        <div  className={style.wrapPage}>
        <h2>Showroom de produtos</h2>
            <div className={style.CardBox}>
            {produtos.map((item) => {
            return(
                <CardProdutos name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
            )
            })}
            </div>
        </div>
    )
}

export default Produtos