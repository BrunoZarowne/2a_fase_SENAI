import React, { useState } from 'react'
import './Atv_1018.css'

function Atv_1018() {
    const [valorFinal, setValorFinal] = useState()
    function qntsNotas(){
        let valor = Number(prompt('Digite um valor para eu falar quantas notas vai precisar'))
        let nota100
        let nota50
        let nota20
        let nota10
        let nota5
        let nota2   
        let nota1

        nota100 = valor / 100

        valor = valor - Math.floor(nota100) * 100

        alert('nota100 ' + nota100)
        alert('valor' + valor)

        nota50 = valor / 50

        valor = valor - Math.floor(nota50) * 50

        alert('nota50 ' + nota50)
        alert('valor' + valor)

        nota20 = valor / 20

        valor = valor - Math.floor(nota20) * 20

        alert('nota20 ' + nota20)
        alert('valor' + valor)
    }
  return (
    <div className='notas'>
      <button onClick={qntsNotas}>Clique aqui e veja qnts notas<br/>precisa pra chegar nessa valor</button>
    </div>
  )
}

export default Atv_1018
