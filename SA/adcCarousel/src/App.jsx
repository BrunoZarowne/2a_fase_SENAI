import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Pagina_obra_base from './components/Pagina_obra_base'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Pagina_obra_base />
      {/* <Carousel /> */}
    </div>
    </>
  )
}

export default App
