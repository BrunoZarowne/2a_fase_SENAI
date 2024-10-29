import { useState } from 'react'
import A from './components/A'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <A />
      </div>
    </>
  )
}

export default App
