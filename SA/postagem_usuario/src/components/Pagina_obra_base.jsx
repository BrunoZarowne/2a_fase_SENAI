import React, { useState } from 'react'
import './Pagina_obra_base.css'

function Pagina_obra_base() {
  return (
      <div className='containerObraBase'>
        <div className='parte_cima'>
            <div className='img_desc_obra'>
                <label>Titulo</label><br />
                <img src="./banana.jpg" alt="" />
            </div>
            <div className='sinopse_genero'>
                <label className='txtSinopse'>Sinopse</label>
                <label className='txtAutor'>Autor: </label>
                <label className='inserirAutor'>a</label>
                <label className='txtGeneros'>Generos: </label>
                <label className='inserirGeneros'>a</label><br />
                <textarea className='caixaSinopse' cols="120" rows="20" readOnly disabled></textarea><br />
                <button>Ler</button>
            </div>
        </div>
    </div>
  )
}

export default Pagina_obra_base
