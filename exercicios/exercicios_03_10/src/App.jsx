import { useState } from 'react'
import Atv_1038 from './components/Atv_1038'
import Atv_1050 from './components/Atv_1050'
import Atv_1009 from './components/Atv_1009'
import Atv_1018 from './components/Atv_1018'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='a'>
        <Atv_1038 />
        <Atv_1050 />
        <Atv_1009 />
        <Atv_1018 />
      </div>
    </>
  )
}

export default App
