import React from 'react'
import Logo_header from './Logo_header'
import './Header_pagina.css'
function Header_pagina() {

  return (
    <div className='headerDiv'>
      <div className='promocoes_farmacia'>
        <h1 className='textoPromocao'>Promoção do dia: Paracetamol 750mg por R$9,99</h1>
      </div>
      
      <div className='headerPagina'>
      <Logo_header />
      </div>
      
      <div className='barraPesquisa'>
        <img src="./lupa.png" alt="" />
      </div>
      
    </div>
  )
}

export default Header_pagina
