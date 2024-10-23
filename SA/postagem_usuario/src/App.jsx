import { useState } from 'react'
import './App.css'
import Pagina_postagem from './components/Pagina_postagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Pagina_postagem />
      </div>
    </>
  )
}

export default App
