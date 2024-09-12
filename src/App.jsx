import style from './App.module.css'

function App() {

  return (
    <>
    <div className={style.wrapBtns}>
      <a href="/produtos"><button>Produtos</button></a>
      <a href="/api"><button>API</button></a>
      <a href="/mapa"><button>Mapa</button></a>
      <a href="/graficos"><button>Graficos</button></a>
    </div>
    <div className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
    </div>
    </>
  )
}

export default App
