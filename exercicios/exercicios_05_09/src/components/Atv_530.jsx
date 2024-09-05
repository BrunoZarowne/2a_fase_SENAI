import { useState} from 'react'
import './Atv_530.css'
import React from 'react'

function Atv_530() {
    const [resultado, setResultado] = useState()

    function NumParImpar(){
  
      let numeroDigitado = Number(prompt('Digite um numero'))
      let resposta
      if (numeroDigitado % 2 == 0) {
          resposta = 'par'
          setResultado(resposta)
      }else if(numeroDigitado % 2 == 1){
        resposta = 'impar'
          setResultado(resposta)
      }else{
        resposta = 'q caralhos vc digitou?'
        setResultado(resposta)
      }
  }
    return (
      <div className='Atv530Container'>
        <h2>Dois copos meio cheios</h2>
          <button onClick={NumParImpar}>Digite um numero para ver se ele é par ou impar</button>
          <div>
            <br />
            {resultado}
          </div>
      </div>
    )
}

export default Atv_530
