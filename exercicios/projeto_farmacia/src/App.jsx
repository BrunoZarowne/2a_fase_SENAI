import { useState } from 'react'
import Header_pagina from './components/header_pagina'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header_pagina /><br/>
        <Home />
      </div>
    </>
  )
}

export default App
/*
    --cor-1: #e23e57;
    --cor-2: #ffffff;
    --cor-3: #e96a7e;
    --cor-4: #ce1f3a;
    --cor-5: #e6e6e6;
    --cor-6: #ef97a4;
*/