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
    })
    
    const [book, setBook] = useState([])

    const handleSubmit = (e) => {
          e.preventDefault();
      
          setBook([...book, { id: book.length + 1, ...formState }]);
        };
    
  function guardar_infos_postagem() {

      console.log(formState)
  }
  return (
    <div className='containerPostagem'>
      
        <a href="">
            <img className='seta' src="./seta_volta.png" alt="" />
        </a>
        <div className='adcImagem'>
            <button className='labelMais'>+</button><br />
            <button className='labelTxt'>Clique para adicionar a<br/>imagen da sua obra</button>
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
            
          <button type="submit" onSubmit={handleSubmit} onClick={guardar_infos_postagem}>Postar</button>
        </div>
      </div>
    </div>
  )
}

export default Pagina_postagem


// import { useState } from "react";

// export default function Home() {
//   const [formState, setFormState] = useState({
//     title: "",
//     subtitle: "",
//     author: "",
//     date: "",
//     pages: "",
//     summary: "",
//   });

//   const [books, setBooks] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setBooks([...books, { id: books.length + 1, ...formState }]);
//   };

//   return (
//     <main className="flex min-h-screen p-8">
      // <form
      //   className="w-full flex flex-col items-center justify-center gap-4"
      //   action="submit"
      //   onSubmit={handleSubmit}
      // >
//         <input
//           name="title"
//           type="text"
//           placeholder="Titulo"
//           required
//           value={formState.title}
//           onChange={(e) =>
//             setFormState({ ...formState, title: e.target.value })
//           }
//         />
//         <input
//           name="subtitle"
//           type="text"
//           placeholder="Subtitulo"
//           required
//           value={formState.subtitle}
//           onChange={(e) =>
//             setFormState({ ...formState, subtitle: e.target.value })
//           }
//         />
//         <input
//           name="author"
//           type="text"
//           placeholder="Autor"
//           required
//           value={formState.author}
//           onChange={(e) =>
//             setFormState({ ...formState, author: e.target.value })
//           }
//         />
//         <input
//           name="date"
//           type="text"
//           placeholder="Data de lançamento"
//           required
//           value={formState.date}
//           onChange={(e) => setFormState({ ...formState, date: e.target.value })}
//         />
//         <input
//           name="pages"
//           type="text"
//           placeholder="Numero de Paginas"
//           required
//           value={formState.pages}
//           onChange={(e) =>
//             setFormState({ ...formState, pages: e.target.value })
//           }
//         />
//         <input
//           name="summary"
//           type="text"
//           placeholder="Resumo"
//           required
//           value={formState.summary}
//           onChange={(e) =>
//             setFormState({ ...formState, summary: e.target.value })
//           }
//         />
//         <button type="submit">Cadastrar livro</button>
//       </form>

//       {books && <pre>{JSON.stringify(books, null, 2)}</pre>}
//     </main>
//   );
// }







{/* <div className='infosObra'>
          <div className='inputsUm'>
            <label>Titulo</label><br />
            <input type="text" value={titulo} onChange={(event) => {setTitulo(event.target.value)}}/><br /><br /><br /><br />
            <label>Subtitulo</label><br />
            <input type="text" value={subTitulo} onChange={(event) => {setSubTitulo(event.target.value)}}/><br /><br /><br /><br />
            <label>Nome do Autor</label><br />
            <input type="text" value={nomeAutor} onChange={(event) => {setNomeAutor(event.target.value)}}/><br /><br /><br /><br />
            <label>Gênero</label><br />
            <input type="text" value={genero} onChange={(event) => {setGenero(event.target.value)}}/><br /><br /><br /><br />
            <label>Numero de paginas</label><br />
            <input className='inputMenor' type="number" value={numPaginas} onChange={(event) => {setNumPaginas(event.target.value)}}/><br /><br /><br />
            <label>Data lançamento</label><br />
            <input className='inputMenor' type="date" value={dataLanc} onChange={(event) => {setDataLanc(event.target.value)}}/>
          </div>
          <div className='inputsDois'>
          <label>Sinopse</label><br />
          <textarea name="" id="" cols="55" rows="27" value={sinopse} onChange={(event) => {setSinopse(event.target.value)}}></textarea><br /><br />
          <button onClick={guardar_infos_postagem}>Postar</button>
        </div>
        </div> */}