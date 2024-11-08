import './App.css'
import Pagina_postagem from './components/Pagina_postagem'
import Pagina_obra_base from './components/Pagina_obra_base'
import Comentarios from './components/Comentarios'
import Carousel from './components/Carousel'


function App() {

  return (
    <>
      <div>
        <Pagina_postagem />
        {/* <Pagina_obra_base /> */}
        {/* <Comentarios /> */}
        <Carousel />
      </div>
    </>
  )
}

export default App
