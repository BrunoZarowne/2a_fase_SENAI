import React from 'react'
import './Header_paginas.css'

function Header_paginas() {
  return (
    <div className='divHeaderPage'>
      <div className='imgsNavBar'>
        <img className='sapo' src="./logo_sapo.png" alt="" />
        <div className='txtNavBar'>
          <label className='txt1'>Seja bem vindo ao nosso mundo literario onde cada pagina</label><br />
          <label className='txt2'> e uma nova aventura esperando para ser  descoberta</label>
        </div>
        <img className='user' src="./img_usuario.png" alt="" />
      </div>
      <div className='buttonsNav'>
        <a href=""><button className='bt1'>Inicio</button></a>
        <a href=""><button className='bt2'>Lançamentos</button></a>
        <a href=""><button className='bt3'>Populares</button></a>
        <a href=""><button className='bt4'>Melhores Avaliados</button></a>
        <a href=""><button className='bt5'>Updates</button></a>
      </div>
    </div>
  )
}

export default Header_paginas
