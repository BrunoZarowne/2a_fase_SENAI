import { useState } from 'react'
import Atv_5_7 from './components/Atv_5_7'
import Atv_7_10 from './components/Atv_7_10'
import Atv_7_11 from './components/Atv_7_11'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Atv_5_7 />
      <Atv_7_10 />
      <Atv_7_11 />
      </div>
    </>
  )
}

export default App
