import { children, createContext,useState } from "react";

export const GlobalContext=createContext()

export const GlobalContextProvider =({children})=>{ 
let usuariologado="gill battes"
const [fotoUsuario,setFotoUsuario]=useState('../images/imagem_padrao_usuario.svg')
const [vetorUsuarios,setVetorUsuarios]=useState([])//Vetor para o gerencianto de pessoa no site
const [paginaAtiva,setPaginaAtiva]= useState(null)
const [UserLogado,setUserLogado] =useState( {
  
        nomePessosa:'',
        emailUsuario:'',
        dataNascimentoUser:'',
        senhaUsuario:'',
        eDev:false,
        eAdm:false,
        idIndentificador:''
        
      } )
const [formState, setFormState] = useState({
      id: "",
      title: "",
      author: "",
      pages: "",
      date: "",
      summary: "",
      images: "",
      genre: ""
    })

const [obrasFavoritadas, setObrasFavoritadas] = useState([])



 return(

<GlobalContext.Provider value={{

    usuariologado,
    setFotoUsuario,
    fotoUsuario,
    vetorUsuarios,
    setVetorUsuarios,
    UserLogado,
    setUserLogado,
    paginaAtiva,
    setPaginaAtiva,
    formState,
    setFormState,
    obrasFavoritadas,
    setObrasFavoritadas
    }}>

{children}
</GlobalContext.Provider>
 )
 
}