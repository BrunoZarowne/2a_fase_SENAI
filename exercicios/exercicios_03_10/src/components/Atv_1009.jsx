import React from 'react'
import './Atv_1009.css'

function Atv_1009() {
    function calcSalarioFinal(){
        let nomeFun = prompt('Me diga seu nome por favor')
        let salarioFun = Number(prompt('Agora me diga o seu salário fixo'))
        let comissaoFun = Number(prompt('Agora me diga quanto deu sua comissão'))
        let salarioFinal

        salarioFinal = salarioFun + comissaoFun * 0.15

        alert(nomeFun + '\nSeu salário final sendo de: ' + salarioFinal)
    }
  return (
    <div className='divPai'>
      <label>Descubra seu salário final</label><br />
      <button onClick={calcSalarioFinal}>Aperte aqui e me conte oque eu preciso
      <br/>saber para te responder corretamente</button>
    </div>
  )
}

export default Atv_1009
