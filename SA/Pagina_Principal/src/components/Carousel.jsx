import React from 'react'
import { useState } from 'react'
import './Carousel.css'
import { register } from 'swiper/element/bundle'
import Modal from 'react-modal'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'



function Carousel() { 

  const [formState, setFormState] = useState({
      title: "",
      subtitle: "",
      author: "",
      pages: "",
      date: "",
      summary: "",
      images: "",
      genre: ""
    })

    

  const [imagensObrasFrutas, setImagensObrasFrutas] = useState([
    {id: '1',
    a: 'https://stackoverflow.com/questions/65590148/swiperjs-how-do-you-style-the-pagination-bullets', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/1200px-Bananas_%28Alabama_Extension%29.jpg',
    titulo: 'banana',
    genero: 'frutas'},
    {id: '2', 
    image: 'https://lh4.googleusercontent.com/proxy/164-DMLRNy1eWrUvCsbkEslbqoOtis7-OJ5DPjR0qpBk3vWf4TRtzNTcpXLlUaWxhfp4_H0m6iNcsDlnlOjuwQKw6J6A2KfF1KQQb1YNr1O9wk4Vmc5lKM8MkZz-1SGR5jbLqgRNi_C0sMmdsmiXXEUnR47U0vBkWBn9aA7WhLrbo2EXiEZ2bOLqXFk5b3cOLB2E6MCc',
    titulo: 'maça'},
    {id: '3', 
    image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2020/09/Foto-02-2.jpg',
    titulo: 'manga'},
    {id: '4', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/1200px-Bananas_%28Alabama_Extension%29.jpg',
    titulo: 'banana'},
    {id: '5', 
    image: 'https://lh4.googleusercontent.com/proxy/164-DMLRNy1eWrUvCsbkEslbqoOtis7-OJ5DPjR0qpBk3vWf4TRtzNTcpXLlUaWxhfp4_H0m6iNcsDlnlOjuwQKw6J6A2KfF1KQQb1YNr1O9wk4Vmc5lKM8MkZz-1SGR5jbLqgRNi_C0sMmdsmiXXEUnR47U0vBkWBn9aA7WhLrbo2EXiEZ2bOLqXFk5b3cOLB2E6MCc',
    titulo: 'maça'},
    {id: '6', 
    image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2020/09/Foto-02-2.jpg',
    titulo: 'manga'},
  ])
  const [imagensObrasAcao, setImagensObrasacao] = useState([
    
  ])

  const [modalIsOpen, setIsOpen] = useState(false)
  function abrirModal() {
    setIsOpen(true)
  }
  function fecharModal() {
    setIsOpen(false)
    
  }
  function adcImagens() {
    abrirModal()
    
  }

  

  function guardar_infos_postagem() {
    if (formState.title == '' ||  formState.subtitle == '' || formState.author == '' || formState.pages == '' || 
    formState.date == '' || formState.summary == '' || formState.images == '' || formState.genre == ''){
      alert('Voce esqueceu de preencher um dos campos, por favor preenchão para poder postr sua obra 😊')
    }


    if (formState.genre == "frutas"){
      setImagensObrasFrutas((imagensObrasFrutas) => 
      [...imagensObrasFrutas, 
      {id: imagensObrasFrutas.length + 1, image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2020/09/Foto-02-2.jpg', titulo: 'manga', genero: 'frutas'}])
      console.log(imagensObrasFrutas)
    }else if( formState.genre == "acao"){
      setImagensObrasacao((imagensObrasAcao) => 
    [...imagensObrasAcao, 
    {id: imagensObrasAcao.length + 1, image: './2.jpg', titulo: 'manga', genero: 'ação'}])
    console.log(imagensObrasAcao)
    }
    
  }
  return (
    <div className='containerCarousel'>
      <button onClick={adcImagens}>adc</button>
      
     <Swiper
      slidesPerView={3}
      pagination={{ clickable: true}}
      navigation  
     >
      {imagensObrasFrutas.map((item) => (
        <SwiperSlide key={item.id}>
          <a href={item.a}>
            <img className='imgs' src={item.image}/>
          </a><br />
          <label>{item.titulo}</label>
        </SwiperSlide>
      ))}
     </Swiper><br />
     <Swiper
      slidesPerView={1}
      pagination={{ clickable: true}}
      navigation  
     >
      {imagensObrasAcao.map((item) => (
        <SwiperSlide key={item.id}>
          <a href={item.a}>
            <img className='imgs' src={item.image}/>
          </a><br />
          <label>{item.titulo}</label>
        </SwiperSlide>
      ))}
     </Swiper>
     <Modal
      className='modalPostagem'
      isOpen={modalIsOpen}
      onRequestClose={fecharModal}
      contentLabel='Modal de exemplo'
      ariaHideApp={false}
      >
      
        
        <div className='infosObra'>
        <button className='buttonFecharModal' onClick={fecharModal}><img src="./fechar_modal.svg"/></button>
          <div className='inputsUm'>
            <label>Link da sua imagen</label><br />
            <input 
            type="text" 
            required 
            value={formState.images} 
            onChange={(e) => 
            setFormState({...formState, images: e.target.value})}/>
            <br /><br /><br />
            
            <label>Titulo</label><br />
            <input 
            type="text" 
            required 
            value={formState.title} 
            onChange={(e) => 
            setFormState({...formState, title: e.target.value})}/>
            <br /><br /><br />

            <label>Subtitulo</label><br />
            <input type="text" 
            required 
            value={formState.subtitle} 
            onChange={(e) => 
            setFormState({...formState, subtitle: e.target.value})}/>
            <br /><br /><br />

            <label>Nome do Autor</label><br />
            <input 
            type="text" 
            required 
            value={formState.author} 
            onChange={(e) => 
            setFormState({...formState, author: e.target.value})}/>
            <br /><br /><br />

            <label>Gênero</label><br />
            <input 
            type="text" 
            required 
            value={formState.genre} 
            onChange={(e) => 
            setFormState({...formState, genre: e.target.value})}/>
            <br /><br /><br />

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
            <div className='caixaSinopse'>
                <label>Sinopse</label><br />
                <textarea 
                name="" 
                id="" 
                cols="55" 
                rows="30" 
                required 
                value={formState.summary} 
                onChange={(e) => 
                setFormState({...formState, summary: e.target.value})}></textarea><br /><br />
                <button type="submit" onClick={guardar_infos_postagem}>Postar</button>
            </div>
        
        </div>
      </Modal>
    </div>
  )
}

export default Carousel

// qnd for usar dar usar esse comando
// npm i swiper
// npm i react-modal


// codiguin pra adicionar no useState
// setImagensObras((imagensObras) => [...imagensObras, {id: imagensObras.length + 1, image: 'URL da imagen que vai'}])