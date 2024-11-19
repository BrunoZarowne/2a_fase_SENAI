import { useState } from 'react'
// import Comentarios from './Comentarios'
import './Pagina_obra_base.css'

function Pagina_obra_base(  ) {

  const [itensObra, setItensObra] = useState({
    titulo: '',
    img: '',
    autor: '',
    genero: '',
    sinopse: ''
  })

  return (
      <div className='containerObraBase'>
        <div className='parte_cima'>
            <div className='img_desc_obra'>
                <label>{itensObra.titulo}</label><br />
                <img src={itensObra.img} alt="" />
            </div>
            <div className='sinopse_genero'>
                <label className='txtSinopse'></label>
                <label className='txtAutor'>Autor: {itensObra.autor}</label>
                <label className='txtGeneros'>Genero: {itensObra.genero}</label><br />
                <p className='caixaSinopsePagina'></p><br />
                <button className='buttonLer'>Ler</button>
            </div>
        </div>
      {/* <Comentarios /> */}
    </div>
  )
}

export default Pagina_obra_base
