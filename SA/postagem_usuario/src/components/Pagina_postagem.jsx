import React from 'react'
import './Pagina_postagem.css'

function Pagina_postagem() {
  return (
    <div className='containerPostagem'>
        <a href="">
            <img className='seta' src="./seta_volta.png" alt="" />
        </a>
        <div className='adcImagem'>
            <p className='labelMais'>+</p><br />
            <p className='labelTxt'>Clique para adicionar a<br/>imagen da sua obra</p>
        </div>
        <div className='infosObra'>
          <div className='inputsUm'>
            <label>Titulo</label><br />
            <input type="text" /><br /><br />
            <label>Nome do Autor</label><br />
            <input type="text" /><br /><br />
            <label>Numero de paginas</label><br />
            <input className='inputMenor' type="text" />
          </div>
          <div className='inputsDois'>
            <label>Subtitulo</label><br />
            <input type="text" /><br /><br />
            <label>Gênero</label><br />
            <input type="text" /><br /><br />
            <label>Data lançamento</label><br />
            <input className='inputMenor' type="date" />
          </div>
          
        </div>
        <div className='sinopse'>
          <label>Sinopse</label>
          <input type="text" />
        </div>
    </div>
  )
}

export default Pagina_postagem
