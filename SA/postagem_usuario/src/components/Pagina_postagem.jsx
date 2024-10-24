import React, { useRef, useState } from 'react'
import './Pagina_postagem.css'

function Pagina_postagem() {
    const [nObra, setNObra] = useState('1')
    const [titulo, setTitulo] = useState('')
    const [subTitulo, setSubTitulo] = useState('')
    const [nomeAutor, setNomeAutor] = useState('')
    const [genero, setGenero] = useState('')
    const [numPaginas, setNumPaginas] = useState('')
    const [dataLanc, setDataLanc] = useState('')
    const [sinopse, setSinopse] = useState('')
    
  function guardar_infos_postagem() {
    const obra1 = {titulo: [titulo], subTitulo: [subTitulo], autor: [nomeAutor],
      genero: [genero], numPaginas: [numPaginas], dataLanc: [dataLanc], sinopse: [sinopse]}

      console.log(obra1)
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
        </div>
        
    </div>
  )
}

export default Pagina_postagem


// var valorTitulo = document.getElementById("tituloTxt").value
    // var valorSubTitulo = document.getElementById("subTitutloTxt").value
    // var valorNomeAutor = document.getElementById("autorTxt").value
    // var valorGenero = document.getElementById("generoTxt").value
    // var valorNumPaginas = document.getElementById("numPaginas").value
    // var valorData = document.getElementById("dataLancamento").value
    // const infosObra = {titulo: {valorTitulo}, subTitulo: {valorSubTitulo}, autor: {valorNomeAutor},
    // genero: {valorGenero}, paginas: {valorNumPaginas}, dataLan: {valorData}}

    // console.log(infosObra)