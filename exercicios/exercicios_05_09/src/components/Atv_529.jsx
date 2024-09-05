import { useState} from 'react'
import './Atv_529.css'
import React from 'react'

function Atv_529() {
  const [resultado, setResultado] = useState()

  function AdvNumero(){

    let numeroDigitado = Number(prompt('Digite um numero'))
    let resposta
    if (numeroDigitado > 0) {
        resposta = 'positivo'
        setResultado(resposta)
    }else if(numeroDigitado < 0){
      resposta = 'negativo'
        setResultado(resposta)
    }else{
      resposta = 'nulo'
      setResultado(resposta)
    }
}
  return (
    
    <div className='Atv529Container'>
      <h2>Copo meio cheio</h2>
        <button onClick={AdvNumero}>Digite um numero para ver se ele é positivo negativo ou nulo</button>
        <div>
          <br />
          {resultado}
        </div>
    </div>
  )
}




export default Atv_529
