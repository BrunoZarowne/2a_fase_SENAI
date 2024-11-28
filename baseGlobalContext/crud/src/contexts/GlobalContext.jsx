import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const [contatoPref, setContatoPref] = useState('')
const [contatos, setContatos] = useState([])
    return(
        <GlobalContext.Provider value={{
                usuarioLogado, 
                contatoPref, 
                setContatoPref,
                contatos,
                setContatos,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
