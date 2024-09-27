import React from 'react'
import'./Home.css'
import Logo_body from './Logo_body'
import End_loja from './End_loja'
import Camisetas from './Camisetas'
function Home() {
  return (
    <div className='homePage'>
        <Logo_body />
        
        <div className='textoInauguracao'>
            <p>Bem Vindo(a) a inauguração da nova farmárcia</p><br />
            <p>Estamos re-abrindo após um certo tempo<br />e voltando melhores doq nunca tendo<br />um sinte bem mais rapido e otimizado!</p>
        </div>
        <End_loja />
        <Camisetas />
    </div>
  )
}

export default Home
