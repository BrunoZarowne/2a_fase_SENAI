import { useState, useContext } from 'react'
import './Pagina_obra_base.css'


// import Comentarios from './Comentarios'

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
                <label></label><br />
                <img src={''} alt="" />
            </div>
            <div className='sinopse_genero'>
                <label className='txtSinopse'>Sinopse</label>
                <label className='txtAutor'>Autor: {}</label>
                <label className='txtGeneros'>Genero: {}</label><br />
                <p className='caixaSinopsePagina'>{}</p><br />
                <button className='buttonLer'>Ler</button>
            </div>
        </div>
      {/* <Comentarios /> */}
    </div>
  )
}

export default Pagina_obra_base

// const [formState, setFormState] = useState({
//   id: "",
//   title: "",
//   subtitle: "",
//   author: "",
//   pages: "",
//   date: "",
//   summary: "",
//   images: "",
//   genre: ""
// // })