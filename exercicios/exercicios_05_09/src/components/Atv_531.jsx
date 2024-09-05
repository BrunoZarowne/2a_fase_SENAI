import { useState} from 'react'
import './Atv_531.css'
import React from 'react'

function Atv_531() {
    const [resultado, setResultado] = useState()


  return (
    <div className='Atv531Container'>
      <h2>Não tem garçom de cara feia</h2>
          <button>Digite seu salário, o valor do empréstimo e o numero de prestações</button>
          <div>
            <br />
            {resultado}
          </div>
    </div>
  )
}

export default Atv_531
