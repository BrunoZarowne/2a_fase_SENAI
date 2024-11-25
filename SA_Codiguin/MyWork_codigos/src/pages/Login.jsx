import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useState,useContext } from 'react'

function Login() {
  const {vetorUsuarios,setVetorUsuarios,UserLogado}=useContext(GlobalContext)
  const [inptEmail,setInptEmail]=useState('')
  const [inptSenha,setInptSenha]=useState('')
  const [IrParaHome,setIrParaHome]=useState('')

  function logar(){
    const usuarioEncontrado=vetorUsuarios.find(encontarUser => encontarUser.emailUsuario==inptEmail && encontarUser.senhaUsuario==inptSenha)
    console.log(usuarioEncontrado)
    if(usuarioEncontrado){
      setIrParaHome("/Home")

    }else{
      alert("ixxxxi")
    }

    
  }
 
 
  return (
    <div className='divImagemFundo'>
     <div className='divContainerInfo'>
      
        <p className='login_h1'>Login</p>

        
      <p className='pText'>"Bem-vindo ao nosso espaço literário! Faça login e mergulhe em um mundo repleto de histórias fascinantes,<br/> descobertas e conhecimento compartilhado. Junte-se a nós na celebração<br/> da literatura!.</p>
   
        
        <div className='divInpt'>


            <input type="email" className='Email_User' placeholder='   insira seu email' value={inptEmail} onChange={(event)=>{setInptEmail(event.target.value)}} /> <br />
            <input type="password" className='senha_User'  placeholder='  insira sua senha'  value={inptSenha} onChange={(event)=>{setInptSenha(event.target.value)}}/>
        
       <div className='container_button'>
        <Link to={IrParaHome}>
        <button className='button_logar' onClick={logar}>logar</button>
        </Link>
        </div>
        
        <p className='naoPossuiUmaConta'>nao possui uma conta? clique <Link to={"/cadastro"} className='link_login'>Aqui</Link> </p>
        
        </div>




     </div>
    </div>
  )
}

export default Login
