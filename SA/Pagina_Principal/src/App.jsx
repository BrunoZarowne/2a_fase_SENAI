import { useState } from 'react'
import Pagina_principal from './pages/Pagina_principal'
import Header_paginas from './pages/Header_paginas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header_paginas /><br/><br/>
        <Pagina_principal />
      </div>
    </>
  )
}

export default App