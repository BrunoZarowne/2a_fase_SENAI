import React from 'react'
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
                <label className='txtGeneros'>Generos: </label>
                <label className='inserirGeneros'>a</label><br />
                <textarea className='caixaSinopse' cols="120" rows="20" readOnly disabled></textarea>
            </div>
        </div>
        <div className='parteMeio'>
          <div className='areaAutor'>
                <label>aaaa</label>
              </div>
        </div>
    </div>
  )
}

export default Pagina_obra_base
