import React from 'react'
import './Pagina_obra_base.css'

function Pagina_obra_base() {
  return (
      <div className='containerObraBase'>
        <div className='parte_cima'>
            <div className='img_desc_obra'>
                <label>Berserk</label><br />
                <img src="./berserk.png" alt="" />
            </div>
            <div className='sinopse_genero'>
                <label>Sinopse</label>
                <label className='txtGeneros'>Generos</label>
                <label className='caixaSinopse'>"Sinopse"</label>
            </div>
        </div>
    </div>
  )
}

export default Pagina_obra_base
