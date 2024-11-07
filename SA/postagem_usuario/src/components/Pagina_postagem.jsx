import React, { useRef, useState } from 'react'
import './Pagina_postagem.css'

function Pagina_postagem() {

    const [formState, setFormState] = useState({
      title: "",
      subtitle: "",
      author: "",
      genre: "",
      pages: "",
      date: "",
      summary: "",
      images: ""
    })
    
    
  function guardar_infos_postagem() {
      
      console.log(formState.title)
  }
  return (
    <div className='containerPostagem'>
      
        <a href="">
            <img className='seta' src="./seta_volta.png" alt="" />
        </a>
        <div className='adcImagem'>
          <label className='labelInput'>
          <input 
          type="file" 
          required 
          value={formState.images} 
          onChange={(e) => 
          setFormState({...formState, images: e.target.value})}/>
          <p className='pMais'>+</p><br />
          <p className='pTxt'>Clique para adicionar a<br/>imagen da sua obra</p>
          </label>
        </div>
        
        <div className='infosObra'>
          <div className='inputsUm'>
            <label>Titulo</label><br />
            <input 
            type="text" 
            required 
            value={formState.title} 
            onChange={(e) => 
            setFormState({...formState, title: e.target.value})}/>
            <br /><br /><br /><br />

            <label>Subtitulo</label><br />
            <input type="text" 
            required 
            value={formState.subtitle} 
            onChange={(e) => 
            setFormState({...formState, subtitle: e.target.value})}/>
            <br /><br /><br /><br />

            <label>Nome do Autor</label><br />
            <input 
            type="text" 
            required 
            value={formState.author} 
            onChange={(e) => 
            setFormState({...formState, author: e.target.value})}/>
            <br /><br /><br /><br />

            <label>Gênero</label><br />
            <input 
            type="text" 
            required 
            value={formState.genre} 
            onChange={(e) => 
            setFormState({...formState, genre: e.target.value})}/>
            <br /><br /><br /><br />

            <label>Numero de paginas</label><br />
            <input 
            className='inputMenor' 
            type="number" 
            required 
            value={formState.pages} 
            onChange={(e) => 
            setFormState({...formState, pages: e.target.value})}/>
            <br /><br /><br />
            
            <label>Data lançamento</label><br />
            <input 
            className='inputMenor' 
            type="date" 
            required 
            value={formState.date} 
            onChange={(e) => 
            setFormState({...formState, date: e.target.value})}/>
          </div>
          <div className='inputsDois'>
            <label>Sinopse</label><br />
            <textarea 
            name="" 
            id="" 
            cols="55" 
            rows="27" 
            required 
            value={formState.summary} 
            onChange={(e) => 
            setFormState({...formState, summary: e.target.value})}></textarea>
            <br /><br />
            
          <button type="submit" onClick={guardar_infos_postagem}>Postar</button>
        </div>
      </div>
    </div>
  )
}

export default Pagina_postagem
