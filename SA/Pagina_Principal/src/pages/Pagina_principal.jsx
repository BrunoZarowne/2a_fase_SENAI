import React from 'react'
import './Pagina_principal.css'
import Carousell_slick from './Carousell_slick'

function Pagina_principal() {
  return (
    <div className='divPaginaPrincipal'>
      {/* <div className='containerMangaAcao'>
        <img src="./berserk.png" alt="" />
        <img src="./MOB.png" alt="" />
        <img src="./ONP.png" alt="" />
        <img src="./MHA.png" alt="" />
        <img src="./KAGU.png" alt="" />
        <img src="./ONE.png" alt="" />
      </div> */}
      <div>
        <Carousell_slick />
      </div>
    </div>
  )
}

export default Pagina_principal
