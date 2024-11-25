import React from 'react'
import { useState } from 'react'
import "./Informacoes_usuario.css" 
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import PaginaAdmin_Gerenciamento_usuarios from './PaginaAdmin_Gerenciamento_usuarios'

function Informacoes_usuario() {
  
  
  const[botaoAtivo,setBotaoAtivo]=useState(null)
  const[modalAtivo,setModalAtivo] = useState(false)
  const {vetorUsuarios,setVetorUsuarios,UserLogado,setUserLogado}=useContext(GlobalContext)
  const [modalIsOpenUpdateUser,setModalIsOpenUdateUser]=useState(false)
  const[pagina,setPagina]=useState('')

 
  const handleClick = (index) => {
    setBotaoAtivo(index); 
    
    setModalAtivo(true)
  
    if(index===2)
    setModalAtivo(false)
  
  
  };


 
  return (
    <div className='container_info_usuarios'>
      <div className='div_inputs_user'>
<label htmlFor="inptNomeUser" >nome</label><input type="text"  className='input_nome_user' defaultValue={UserLogado.nomePessosa}  name='inptNomeUser'/>
<label htmlFor="inptEmailuser">email</label><input type="text" className='input_emai_user' defaultValue={UserLogado. emailUsuario} name='inptEmailuser'/>
<label htmlFor="inptDataNasUser">data nascimento</label><input type="text" className='input_data_nascimento_user' defaultValue={ UserLogado.dataNascimentoUser} name='inptDataNasUser'/>
<label htmlFor="inptSenhaUser">senha</label><input type="text" className='input_senha_user' defaultValue={UserLogado.senhaUsuario} name='inptSenhaUser'/>
</div>

<div className='container_button_edit_info_user'>
  <p className='titulo_edit_dados'>editar seus dados</p><br />
  <button className='bottao_edit_user'onClick={()=>{setModalIsOpenUdateUser(true)}}></button>
  </div>
 { modalIsOpenUpdateUser 
 && <div className='BackDrop'><dialog open={modalIsOpenUpdateUser} className='modalUsuarioTrocaInfo'>
  <p>
  Insira as Informações que deseja trocar
  </p>
  <div className='divInpt'>
    <div className='containerNomeNovo'>
    <label htmlFor="inptNovoNome">Insira aqui o nome: </label> <input name='inptNovoNome' className='inptCasdastroNovoNome'></input>
    </div>

    <div className='containerNovoEmail'>
      <label htmlFor="inptNovoEmail">Insira Aqui o email: </label><input type="text" name='inptNovoEmail' className='inptCadastroNovoEmail' />
    </div>

    <div>
      <label htmlFor="inptNovaDataNas">insira Aqui a data de nascimento: </label> <input type="text" name='inptNovaDataNas' className='inptCadastroNovaDataNascimento' />
    </div>

    <div className='containersenhaNova'>
      <label htmlFor="inptNovaSenha">Insira sua nova senha: </label> <input name='inptNovaSenha' type="password" className='inptCadastroNovasenha' />

    </div>

  </div>
  </dialog> </div>}
    



  
<button  className={`button_excluir_conta ${botaoAtivo === 1 ? 'ativo' : 'inativo'}`}
                onClick={() => {handleClick(1)}} >excluir conta</button>

<dialog open={modalAtivo} className='dialog_excluir_conta'>

<div className='div_container_certeza_exlui-conta'>



<div className='container_titulo'>
<h2>tem certeza que voce quer excluir sua conta?</h2>
</div>
<div className='container_bottao_excluir_conta_definitivo'>
  <Link to={pagina}>
<button className='bottao_excluir_conta_definitivo' onClick={()=>{ setVetorUsuarios(vetorUsuarios.slice(0,-1)),setPagina('/')}}>sim,excluir conta</button> <button    onClick={() => {handleClick(2)}} className='botton_cancela_excluzao'>não,manter conta</button>
  </Link>


</div>
</div>




</dialog>


    </div>
  )
}

export default Informacoes_usuario
