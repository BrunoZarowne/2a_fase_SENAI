import React from 'react'
import './PaginaAdmin_Gerenciamento_usuarios.css'
import { GlobalContext } from '../context/GlobalContext'
import { useState,useContext } from 'react'

function PaginaAdmin_Gerenciamento_usuarios(){

    const{vetorUsuarios,setVetorUsuarios}=useContext(GlobalContext)

  return (
    <div>
        
        <div className='containerCard'>
            {vetorUsuarios.map((user,index)=>(
            
                <div key={index} className='cardUsuarios'>
                    <div><button className='botaoApagarUser' onClick={()=>{
                        

                         setVetorUsuarios(vetorUsuarios.filter( a =>
                           user.nomePessosa !== a.nomePessosa || user.emailUsuario !== a.emailUsuario

                            ))
                    }}>X</button></div>
                    <p className='pNome'>Nome: {user.nomePessosa}</p>
                    <p className='pSenha'> Senha: {user.senhaUsuario}</p>
                    <p className='pDataNascimento'>Data de nascimento: {user.dataNascimentoUser}</p>
                    <p className='pEmail'>Email: {user.emailUsuario}</p>
                    <p className='pEmail'>ola{user.posicaoVetor}</p>
                    


                </div>


            )
            
            
            )}
        </div>
    
    </div>
  )
}

export default PaginaAdmin_Gerenciamento_usuarios
