import React, { useState } from 'react'
import './ErroUsario.css'
function Componemt_erro_usario() {
    const[modalOpen,setModalOpen]=useState(true)
  return (
    <div>
        <dialog open={modalOpen} className='modalErroUsuario'>
        <p className='ErroDoUsuario'>Insira todas Informações corretamente</p>
        <button onClick={(event)=>{setModalOpen(false)}}></button>
        </dialog>
        
      
    </div>
  )
}

export default Componemt_erro_usario
