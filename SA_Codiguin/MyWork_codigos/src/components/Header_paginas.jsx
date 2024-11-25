import React from 'react'
import './Header_paginas.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useState,useContext,useEffect } from 'react'


function Header_paginas() {
  
  const {fotoUsuario,setFotoUsuario}=useContext(GlobalContext)
  const {paginaAtiva,setPaginaAtiva}= useContext(GlobalContext)
  const {vetorUsuarios,setVetorUsuarios,UserLogado,setUserLogado}=useContext(GlobalContext)
  
  
  
  function ativaPagina (index){

    setPaginaAtiva(index)
    localStorage.setItem('paginaAtiva', index); // Salva o índice no Local Storage

  }

  useEffect(() => {
    const savedPage = localStorage.getItem('paginaAtiva');
    if (savedPage) {
      setPaginaAtiva(parseInt(savedPage, 10)); // Atualiza o estado com o valor salvo
    }
  }, [setPaginaAtiva]);


  return (
    <div className='divHeaderPage'>
      <div className='imgsNavBar'>
        <img className='sapo' src="../images/logo_sapo.png" alt="" />
      <div className='divNomeUserIcon'>
        <Link to={"/Perfil_de_Usuario"}>
        <img className='user' src={fotoUsuario} alt="" />
        </Link>
        <p className='PnomeUsuario'>{UserLogado.nomePessosa.slice(0,5)}</p>
     
      </div>
        
     
        
      </div>
      <div className='buttonsNav'>
    <Link to={"/Home"}>
          <button
            className={`bt1 ${paginaAtiva === 1 ? 'ativo' : 'inativo'}`}
            onClick={() => ativaPagina(1)}
          >
            Inicio
          </button>
          </Link>

        <Link to={"/Pag_obra_lancamentos"}>
          <button
            className={`bt2 ${paginaAtiva === 2 ? 'ativo' : 'inativo'}`}
            onClick={() => ativaPagina(2)}
          >
            Lançamentos
          </button>
        
          </Link>
        
        <a href="">  <button className={`bt3 ${paginaAtiva === 3 ? 'ativo' : 'inativo'}`}
                onClick={() => ativaPagina(3)}>Populares</button>
          
           </a>
        <a href=""><button className={`bt4 ${paginaAtiva === 4 ? 'ativo' : 'inativo'}`}
                onClick={() => ativaPagina(4)}>Melhores Avaliados</button></a>

        <Link to={""}>
        <button className={`bt5 ${paginaAtiva === 5 ? 'ativo' : 'inativo'}`}
                onClick={() => ativaPagina(5)}>
            updates
          </button>
        </Link>
      
      
      </div>
    </div>
  )
}

export default Header_paginas
