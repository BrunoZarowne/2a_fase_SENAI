import React, { useState } from 'react'
import Navbar from "../components/Navbar"

function Atv_7_12() {
    const [inputNumero, setInputNumero] = useState('')
    const [contagem, setContagem] = useState(0)
    const [mostrarResultado, setMostrarResultado] = useState(false)

    function lerNumero(){
        if (inputNumero > 100 && inputNumero < 200){
            setContagem(contagem + 1)
        }
    }
    function mudarResultado(){
        if(mostrarResultado == true){
            setMostrarResultado(false)
        }else{
            setMostrarResultado(true)
        }
    }
    
  return (
    <div>
        <Navbar />
      <label>Exercicio 7.12</label><br />
      <input type="text" 
        value={inputNumero}
        onChange={(event) => setInputNumero(event.target.value)}
      />
      <button onClick={lerNumero}>Ler</button>
      <button onClick={mudarResultado}>Resultado</button>

      { mostrarResultado && 
      <div>
        <label>Numero na faixa de 100 a 200: {contagem}</label>
      </div>}
      
    </div>
  )
}

export default Atv_7_12
