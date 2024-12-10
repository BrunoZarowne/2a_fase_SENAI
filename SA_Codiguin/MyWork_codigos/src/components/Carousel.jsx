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

  const [imagensObrasMangas, setImagensObrasMangas] = useState([
    {
    id: '1', 
    title: 'Berserk',
    author: 'Kentaro Miura',
    paginas: '224',
    data: '05/08/1989',
    summary: 'Berserk é uma série de mangá escrita e ilustrada por Kentaro Miura. Situado em um mundo de fantasia sombria inspirado na Europa medieval, a história gira em torno de Guts, um solitário mercenário, e Griffith, o líder de um bando de mercenários chamado de "Bando do Falcão".',
    image: 'https://m.media-amazon.com/images/I/71lnvXSiITL.jpg',
    genre: 'Manga'
    },

    {
    id: '2',
    title: 'Mob Psycho 100',
    author: 'One',
    pages: '200',
    date: '12/04/2012',
    summary: 'A história desenrola-se à volta de “Mob”, um jovem que explodirá se a sua capacidade emocional chegar aos 100%. Este jovem com poderes psíquicos ganhou o apelido de “Mob” pois ele não se destaca entre as outras pessoas, por isso seu nome, o qual contém várias traduções.',
    image: 'https://m.media-amazon.com/images/I/91nunbvU04L._AC_UF1000,1000_QL80_.jpg',
    genre: 'Manga'
    },

    {
    id: '3',
    title: 'One Punch Man',
    author: 'One, Yusuku Murata',
    pages: '232',
    date: '05/10/2015',
    summary: 'One Punch Man acompanha Saitama, um jovem oficial incrivelmente forte que possui a força necessária para derrotar vilões com um único soco. Devido à sua incomparável força, ele se tornou entediado e busca por adversários que possam igualmente contra ele.',
    image: 'https://m.media-amazon.com/images/I/71OL6PvzA9L._AC_UF1000,1000_QL80_.jpg',
    genre: 'Manga'
    },

    {
    id: "4",
    title: "My Hero Academia",
    author: "Kōhei Horikoshi",
    pages: "192",
    date: "10/07/2014",
    summary: "Boku no Hero conta a história de Izuku 'Deku' Midoriya, um jovem que nasceu sem Indivualidade (poder) em um mundo em que 80% da população manifesta ao menos uma desde criança. O sonho do jovem de se tornar um herói, inspirado pelo herói nº 1, All Might, é massacrado pela descoberta.",
    image: "https://m.media-amazon.com/images/I/81AjnD8nvHL.jpg",
    genre: "Manga"
    },

    {
    id: '5',
    title: 'Kagura Bachi',
    author: 'Takeru Hokazono',
    pages: '216',
    date: '21/09/2024',
    summary: 'A história de Kagurabachi acompanha o protagonista Chihiro Rokuhira, um jovem que trabalha ao lado do pai, o lendário ferreiro, Kunishige Rokuhira. Decidido a seguir os caminhos do chefe da família, Chihiro se dedica e treina diariamente para se tornar um grande mestre forjador de katanas.',
    image: 'https://i.imgur.com/pMFB3Fq.png',
    genre: 'Manga'

    },

    {
    id: '6',
    title: 'One Piece',
    author: 'Eiichirô Oda',
    pages: '192',
    date: '20/10/1999',
    summary: 'A série foca em Monkey D. Luffy, um jovem que se tornou usuário de Akuma no Mi acidentalmente quando era criança. Ele comeu a Akuma no Mi conhecida como Gomu Gomu no Mi, ou Fruta da Borracha, que estava sob posse da tripulação do poderoso pirata Shanks, o Ruivo, o ídolo de infância de Luffy.',
    image: 'https://johto.legiaodosherois.com.br/wp-content/uploads/2021/08/legiao_4YmvHICdo9Zu.jpg',
    genre: 'Manga'
    },
  ])
  const [imagensObrasHQs, setImagensObrasHQs] = useState([
    {
    id: '1',
    title: 'The Boys',
    author: 'Garth Ennis, Darick Robertson',
    pages: '153',
    date: '19/02/2007',
    summary: 'The Boys se passa em um universo onde indivíduos superpoderosos são reconhecidos como heróis pelo público em geral e pertencem à poderosa corporação Vought International, que os comercializa e monetiza. Fora de suas personas heroicas, a maioria é arrogante e corrupta.',
    image: 'https://m.media-amazon.com/images/I/818kKwdtJ4L._AC_UF1000,1000_QL80_.jpg',
    genre: 'HQ'
    },

    {
    id: '2',
    title: 'Invincible',
    author: 'Robert Kirkman',
    pages: '344',
    date: '22/01/2003',
    summary: 'Invincible. Baseada na HQ homônima, Invencível conta a história de um mundo habitado por super-heróis. A narrativa acompanha a vida de Mark Grayson (Invencível), que ganha seus poderes ao completar 17 anos e se une a seu pai, Nolan Grayson (Omni-Man), para combater os vilões.',
    image: 'https://falaanimal.com.br/wp-content/uploads/2022/06/SkyboundX25capa_29062022.jpg',
    genre: 'HQ'
    },

    {
    id: '3',
    title: 'Watchmen',
    author: 'Alan Moore, Dave Gibbons',
    pages: '216',
    date: '06/03/1987',
    summary: 'Quando um de seus antigos colegas é assassinado, o vigilante mascarado Rorschach descobre um plano para matar e desacreditar todos os super-heróis do passado e do presente. À medida que ele se reconecta com sua antiga legião de combate ao crime, um grupo desorganizado de super-heróis aposentados, dentre os quais somente um possui verdadeiros poderes, Rorschach vislumbra uma ampla e perturbadora conspiração que está ligada ao passado deles e a catastróficas consequências para o futuro.',
    image: 'https://m.media-amazon.com/images/I/81IOAiyRD+L._AC_UF894,1000_QL80_.jpg',
    genre: 'HQ'
    },

    {
    id: '4',
    title: 'Batman',
    author: 'Frank Miller',
    pages: '144',
    date: '18/07/2008',
    summary: 'Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos.',
    image: 'https://br.web.img3.acsta.net/pictures/16/08/16/16/22/131075.jpg',
    genre: 'HQ'
    },

    {
    id: '5',
    title: 'Sandman',
    author: 'Neil Gaiman, Malcom Jones |||',
    pages: '616',
    date: '29/11/1988',
    summary: 'A história é vista do ponto de vista de Sonho, um dos sete perpétuos, a representação antropomórfica do sonho, inicialmente preso por um grupo de humanos que almejava prender sua irmã mais velha Morte para que se tornassem imortais, mas falham e capturam sonho.',
    image: 'https://rika.vtexassets.com/arquivos/ids/278826/sandman-preludio-1.jpg?v=635877227581230000',
    genre: 'HQ'
    },

    {
    id: '6',
    title: 'V de Vingança',
    author: 'Alan Moore',
    pages: '304',
    date: '/10/1989',
    summary: 'Uma poderosa e aterradora história sobre perda de liberdade e cidadania em um mundo bem possível, V DE VINGANÇA permanece como uma das maiores obras dos quadrinhos e o trabalho que revelou ao mundo seus criadores, ALAN MOORE e DAVID LLOYD.Encenada em uma Inglaterra de um futuro imaginário que se entregou ao fascismo, esta arrebatadora história captura a natureza sufocante da vida em um estado policial autoritário e a força redentora do espírito humano que se rebela contra essa situação.Obra de surpreendente clareza e inteligência, V DE VINGANÇA traz inigualável profundidade de caracterizações e verossimilhança em um audacioso conto de opressão e resistência.',
    image: 'https://m.media-amazon.com/images/I/71RccWOPFKL._AC_UF1000,1000_QL80_.jpg',
    genre: 'HQ'
    },
    
  ])

  const [livros, setLivros] = useState([
    {
    id: '1',
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    pages: '590',
    date: '26/06/1997',
    summary: 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.',
    image: 'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '2',
    title: 'O Senhor dos Anéis',
    author: 'J. R. R. Tolkien',
    pages: '1228',
    date: '03/01/1892',
    summary: 'Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.',
    image: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '3',
    title: 'Anne Frank',
    author: 'Anne Frank',
    pages: '416',
    date: '25/06/1947',
    summary: 'Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto. Uma poderosa lembrança dos horrores de uma guerra, um testemunho eloquente do espírito humano. Assim podemos descrever os relatos feitos por Anne em seu diário.',
    image: 'https://m.media-amazon.com/images/I/91RMqWB-CTL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '4',
    title: 'O Pequeno Principe',
    author: 'Antoine de Saint-Exupéry',
    pages: '94',
    date: '06/04/1943',
    summary: 'É um conto poético, com ilustrações em aquarela do autor, em que um piloto perdido no deserto encontra um jovem príncipe em visita à Terra vindo de um minúsculo asteroide. A história é filosófica e inclui críticas sociais ao mundo adulto.',
    image: 'https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },

    {
    id: '5',
    title: 'A Culpa É Das Estrelas',
    author: 'John Green',
    pages: '224',
    date: '10/01/2012',
    summary: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta.',
    image: 'https://m.media-amazon.com/images/I/51M9IbBqxCL.jpg',
    genre: 'Livro'
    },

    {
    id: '6',
    title: 'A Cabana',
    author: 'William P. Young',
    pages: '232',
    date: '10/05/2007',
    summary: 'Missy, a filha mais nova, foi raptada e, de acordo com as provas encontradas numa cabana abandonada, brutalmente assassinada. Quatro anos mais tarde, Mack, mergulhado numa depressão da qual nunca recuperou, recebe um bilhete, aparentemente escrito por Deus, convidando-o a voltar à malograda cabana.',
    image: 'https://m.media-amazon.com/images/I/91fLBlcmpXL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Livro'
    },
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
    if (formState.title == '' || formState.author == '' || formState.pages == '' || 
    formState.date == '' || formState.summary == '' || formState.images == '' || formState.genre == ''){
      alert('Você esqueceu de preencher um dos campos, por favor preencha para poder postar sua obra 😊')
    }else{
      if (formState.genre == "Manga"){
        setImagensObrasMangas((imagensObrasMangas) => 
        [...imagensObrasMangas, 
        {id: imagensObrasMangas.length + 1, title: formState.title, author: formState.author, pages: formState.pages, date: formState.date,
        summary: formState.summary, image: formState.images, genre: formState.genre}])
        console.log(imagensObrasMangas)
      }
      else if( formState.genre == "HQ"){
        setImagensObrasHQs((imagensObrasHQs) => 
        [...imagensObrasHQs, 
        {id: imagensObrasHQs.length + 1, title: formState.title, author: formState.author, pages: formState.pages, date: formState.date,
        summary: formState.summary, image: formState.images, genre: formState.genre}])
        console.log(imagensObrasHQs)
      }
      else if( formState.genre == "Livro"){
        setLivros((livros) => 
        [...livros, 
        {id: livros.length + 1, title: formState.title, author: formState.author, pages: formState.pages, date: formState.date,
        summary: formState.summary, image: formState.images, genre: formState.genre}])
        console.log(livros)
      }
    }


  }

  const {obrasFavoritadas, setObrasFavoritadas} = useContext(GlobalContext)

  const {obrasVisitadas, setObrasVisitadas} = useContext(GlobalContext)


// mangas //
  
  function adcObrasFavManga(event){ 
    const idManga = event.currentTarget.getAttribute('data-idmanga');
    const titleManga = event.currentTarget.getAttribute('data-titlemanga');
    const imageManga = event.currentTarget.getAttribute('data-imagemanga');
    
    setObrasFavoritadas((fav) =>
    [...obrasFavoritadas, {id: idManga, title: titleManga, img: imageManga}])
    console.log(obrasFavoritadas)
  }

  function adcObrasHistManga(event){
    const idMangaHist = event.currentTarget.getAttribute('data-idhistmanga');
    const titleMangaHist = event.currentTarget.getAttribute('data-titlehistmanga');

    const dataAtual = new Date()
    const dataHoras = dataAtual.getHours()
    const dataMinutos = dataAtual.getMinutes()
    const dataShow = dataHoras.toString() + ':' + dataMinutos.toString()
    
    setObrasVisitadas(
      [...obrasVisitadas, {id: idMangaHist, title: titleMangaHist, time: dataShow}])
    console.log(obrasVisitadas)
  }
// mangas //

// HQ //

function adcObrasFavHQs(event){
  const idHQ = event.currentTarget.getAttribute('data-idhq')
  const titleHQ = event.currentTarget.getAttribute('data-titlehq')
  const imageHQ = event.currentTarget.getAttribute('data-imagehq')

  setObrasFavoritadas((fav) =>
    [...obrasFavoritadas, {id: idHQ, title: titleHQ, img: imageHQ}])
    console.log(obrasFavoritadas)
}

function adcObrasHistHQs(event){
  const idHQHist = event.currentTarget.getAttribute('data-idhisthq')
  const titleHQHist = event.currentTarget.getAttribute('data-titlehisthq')

  const dataAtual = new Date()
  const dataHoras = dataAtual.getHours()
  const dataMinutos = dataAtual.getMinutes()
  const dataShow = dataHoras.toString() + ':' + dataMinutos.toString()

  setObrasVisitadas(
    [...obrasVisitadas, {id: idHQHist, title: titleHQHist, time: dataShow}])
  console.log(obrasVisitadas)
}
 
// HQ //

// Livro //

function adcObrasFavLivros(event){
  const idLivro = event.currentTarget.getAttribute('data-idlivro')
  const titleLivro = event.currentTarget.getAttribute('data-titlelivro')
  const imageLivro = event.currentTarget.getAttribute('data-imagelivro')

  setObrasFavoritadas((fav) =>
    [...obrasFavoritadas, {id: idLivro, title: titleLivro, img: imageLivro}])
    console.log(obrasFavoritadas)
}

function adcObrasHistlivro(event){
  const idLivroHist = event.currentTarget.getAttribute('data-idhistlivro')
  const titleLivroHist = event.currentTarget.getAttribute('data-titlehistlivro')

  const dataAtual = new Date()
  const dataHoras = dataAtual.getHours()
  const dataMinutos = dataAtual.getMinutes()
  const dataShow = dataHoras.toString() + ':' + dataMinutos.toString()

  setObrasVisitadas(
    [...obrasVisitadas, {id: idLivroHist, title: titleLivroHist, time: dataShow}])
  console.log(obrasVisitadas)
}
  
// Livro //

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
            <button className='buttonMangas'
            data-idhistmanga={item.id}
            data-titlehistmanga={item.title}
            onClick={adcObrasHistManga}>
              <img className='imgsMangas' src={item.image}/>
            </button><br />
            <label>{item.title}</label>
            <button className='buttonFav'
            data-idmanga={item.id}
            data-titlemanga={item.title}
            data-imagemanga={item.image}
            onClick={adcObrasFavManga}>
              <img src="./public/images/favorita_vazio.svg"/>
            </button>
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
          <button className='buttonHQs'
          data-idhisthq={item.id}
          data-titlehisthq={item.title}
          onClick={adcObrasHistHQs}>
            <img className='imgsHQs' src={item.image}/>
          </button><br />
          <label>{item.title}</label>
          <button className='buttonFav'
          data-idhq={item.id}
          data-titlehq={item.title}
          data-imagehq={item.image}
          onClick={adcObrasFavHQs}>
            <img src="./public/images/favorita_vazio.svg"/>
          </button>
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
            <button className='buttonLivros'
            data-idhistlivro={item.id}
            data-titlehistlivro={item.title}
            onClick={adcObrasHistlivro}>
              <img className='imgsLivros' src={item.image}/>
            </button><br />
            <label>{item.title}</label>
            <button className='buttonFav'
            data-idlivro={item.id}
            data-titlelivro={item.title}
            data-imagelivro={item.image}
            onClick={adcObrasFavLivros}>
            <img src="./public/images/favorita_vazio.svg"/>
          </button>
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
        <button className='buttonFecharModal' onClick={fecharModal}>
          <img src="./images/fechar_modal.svg"/>
        </button>
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
