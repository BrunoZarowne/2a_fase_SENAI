import { useState } from 'react'
import Pagina_principal from './components/Pagina_principal'
import Header_paginas from './components/Header_paginas'
import Carousel from './Carousel.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header_paginas /><br/><br/>
        <Pagina_principal />
        <Carousel />
      </div>
    </>
  )
}

export default App
