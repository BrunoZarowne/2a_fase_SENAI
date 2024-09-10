import { useState } from 'react'
import Atv_518_519 from './components/Atv_518_519'
import Atv_523 from './components/Atv_523'
import Atv_524 from './components/Atv_524'
import Atv_525 from './components/Atv_525'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Atv_518_519 /><br />
    <Atv_523 /><br />
    <Atv_524 /><br />
    <Atv_525 />
    </>
  )
}

export default App
