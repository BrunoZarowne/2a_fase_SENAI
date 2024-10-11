import React from 'react'
import './Camisetas.css'
function Camisetas() {
  return (
    <div className='divCamisetas'>
        <div className='camisaUm'>
            <img src="./farmarcia-camiseta.png" alt="" />
            <p>Temos agora tambem camisetas para voce que<br/> ama nossa farmárcia, por apenas R$49,99</p>
        </div>

        <div className='camisaDois'>
            <img src="./farmarcia-camisetas.png" alt="" />
            <p>Tendo nas cores cinzas e pretas, <br />com os tamanhos sendo: P, M, G</p>
        </div>
    </div>
  )
}

export default Camisetas
