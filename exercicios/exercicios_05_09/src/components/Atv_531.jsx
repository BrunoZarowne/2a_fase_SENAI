import { useState} from 'react'
import './Atv_531.css'
import React from 'react'

function Atv_531() {
    const [resultado, setResultado] = useState()
    
    function calcEmprestimo(){

      let valorSalario = Number(prompt('Digite o valor do seu salário: '))
      let valorEmprestimo = Number(prompt('Digite o valor do empréstimo: '))
      let nmrPrestacoes = Number(prompt('Agora me diga em qnts prestações vai ser: '))
      let valorSalario30Por
      let valorEmprestimoCPrestacoes
      let resposta

      valorEmprestimoCPrestacoes = valorEmprestimo / nmrPrestacoes
      valorSalario30Por = valorSalario * 0.3

      if(valorEmprestimoCPrestacoes >= valorSalario30Por){
        resposta = 'Empréstimo pode ser concebido'
        setResultado(resposta)
      }else if(valorEmprestimoCPrestacoes < valorSalario30Por){
        resposta = 'Empréstimo não pode ser concebido'
        setResultado(resposta)
      }
    }


  return (
    <div className='Atv531Container'>
      <h2>Não tem garçom de cara feia</h2>
          <button onClick={calcEmprestimo}>Digite seu salário, o valor do empréstimo e o numero de prestações</button>
          <div>
            <br />
            {resultado}
          </div>
    </div>
  )
}

export default Atv_531
