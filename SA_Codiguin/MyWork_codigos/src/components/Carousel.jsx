import React, { useContext } from 'react'
import { useState } from 'react'
import './Carousel.css'
import { register } from 'swiper/element/bundle'
import Modal from 'react-modal'
import { GlobalContext } from '../context/GlobalContext'


register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'

function Carousel() { 

  const {formState, setFormState} = useContext(GlobalContext)

  // const [formState, setFormState] = useState({
  //     id: "",
  //     title: "",
  //     subtitle: "",
  //     author: "",
  //     pages: "",
  //     date: "",
  //     summary: "",
  //     images: "",
  //     genre: ""
  //   })

    

  const [imagensObrasMangas, setImagensObrasMangas] = useState([
    {id: '1', 
    image: 'https://m.media-amazon.com/images/I/71lnvXSiITL.jpg',
    titulo: 'Berserk'},
    {id: '2', 
    image: 'https://m.media-amazon.com/images/I/91nunbvU04L._AC_UF1000,1000_QL80_.jpg',
    titulo: 'Mob Psycho 100'},
    {id: '3', 
    image: 'https://m.media-amazon.com/images/I/71OL6PvzA9L._AC_UF1000,1000_QL80_.jpg',
    titulo: 'One Punch Man'},
    {id: '4', 
    image: 'https://m.media-amazon.com/images/I/81AjnD8nvHL.jpg',
    titulo: 'My Hero Academia'},
    {id: '5', 
    image: 'https://i.imgur.com/pMFB3Fq.png',
    titulo: 'Kagura Bachi'},
    {id: '6', 
    image: 'https://comichub.blob.core.windows.net/high/80cfb218-634d-4001-9df0-f7fa0347ac90.jpg',
    titulo: 'One Piece'},
  ])
  const [imagensObrasHQs, setImagensObrasHQs] = useState([
    {id: '1', 
    image: 'https://m.media-amazon.com/images/I/818kKwdtJ4L._AC_UF1000,1000_QL80_.jpg',
    titulo: 'The Boys'},
    {id: '2', 
    image: 'https://falaanimal.com.br/wp-content/uploads/2022/06/SkyboundX25capa_29062022.jpg',
    titulo: 'Invincible'},
    {id: '3', 
    image: 'https://m.media-amazon.com/images/I/81IOAiyRD+L._AC_UF894,1000_QL80_.jpg',
    titulo: 'Watchmen'},
    {id: '4', 
    image: 'https://br.web.img3.acsta.net/pictures/16/08/16/16/22/131075.jpg',
    titulo: 'Batman'},
    {id: '5', 
    image: 'https://rika.vtexassets.com/arquivos/ids/278826/sandman-preludio-1.jpg?v=635877227581230000',
    titulo: 'Sandman'},
    {id: '6', 
    image: 'https://m.media-amazon.com/images/I/71RccWOPFKL._AC_UF1000,1000_QL80_.jpg',
    titulo: 'V de Vingança'},
    
  ])

  const [livros, setLivros] = useState([
    {id: '1', 
    image: 'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg',
    titulo: 'Harry Potter'},
    {id: '2', 
    image: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg',
    titulo: 'O Senhor dos Anéis'},
    {id: '3', 
    image: 'https://m.media-amazon.com/images/I/91RMqWB-CTL._AC_UF1000,1000_QL80_.jpg',
    titulo: 'Anne Frank'},
    {id: '4', 
    image: 'https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg',
    titulo: 'O Pequeno Principe'},
    {id: '5', 
    image: 'https://m.media-amazon.com/images/I/51M9IbBqxCL.jpg',
    titulo: 'A Culpa É Das Estrelas'},
    {id: '6', 
    image: 'https://m.media-amazon.com/images/I/91fLBlcmpXL._AC_UF1000,1000_QL80_.jpg',
    titulo: 'A Cabana'},
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
      alert('Você esqueceu de preencher um dos campos, por favor preencha para poder postar sua obra 😊')
    }else{
      if (formState.genre == "Manga"){
        setImagensObrasMangas((imagensObrasMangas) => 
        [...imagensObrasMangas, 
        {id: formState.length + 1, image: formState.images, titulo: formState.title, genero: formState.genre}])
        console.log(formState)
      }else if( formState.genre == "HQ"){
        setImagensObrasHQs((imagensObrasHQs) => 
      [...imagensObrasHQs, 
      {id: formState.length + 1, image: formState.images, titulo: formState.title, genero: formState.genre}])
      }
      else if( formState.genre == "Livro"){
        setLivros((livros) => 
      [...livros, 
      {id: formState.length + 1, image: formState.images, titulo: formState.title, genero: formState.genre}])
      }
    }


  }
  
 

  return (
    <div className='containerCarousel'>
      <button className='buttonCarousel' onClick={adcImagens}>Postar</button>
      
    <div className='carouselMangas'>
      <Swiper
        slidesPerView={5}
        pagination={{ clickable: true}}
        navigation  
      >
        {imagensObrasMangas.map((item) => (
          <SwiperSlide key={item.id}>
              <img className='imgsMangas' src={item.image}/><br />
            <label>{item.titulo}</label>
          </SwiperSlide>
        ))}
      </Swiper>
     </div><br /><br /><br />     
     <div className='carouselHQs'>
     <Swiper
      slidesPerView={5}
      pagination={{ clickable: true}}
      navigation  
     >
      {imagensObrasHQs.map((item) => (
        <SwiperSlide key={item.id}>
          <a href={item.a}>
            <img className='imgsHQs' src={item.image}/>
          </a><br />
          <label>{item.titulo}</label>
        </SwiperSlide>
      ))}
     </Swiper>
     </div><br />
     <div className='carouselLivros'>
      <Swiper
        slidesPerView={5}
        pagination={{ clickable: true}}
        navigation  
      >
        {livros.map((item) => (
          <SwiperSlide key={item.id}>
              <img className='imgsLivros' src={item.image}/><br />
            <label>{item.titulo}</label>
          </SwiperSlide>
        ))}
      </Swiper>
     </div><br />
     <Modal
      className='modalPostagem'
      isOpen={modalIsOpen}
      onRequestClose={fecharModal}
      contentLabel='Modal de exemplo'
      ariaHideApp={false}
      >
      
        
        <div className='infosObra'>
        <button className='buttonFecharModal' onClick={fecharModal}><img src="./images/fechar_modal.svg"/></button>
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

// https://www.freecodecamp.org/portuguese/news/como-passar-dados-e-eventos-entre-componentes-em-react/
// ver para user useEffect dps