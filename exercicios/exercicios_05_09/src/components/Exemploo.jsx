import { useState } from "react"
import './Exemploo.css'
function Exemploo() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){
      setResultado(resultado + 1)
    }
    function diminuir(){
      setResultado(resultado - 1)
    }
    return (
    <div className="ExmpContainer">
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      <br /><br />
      {resultado}
    </div>
  )
}

export default Exemploo
