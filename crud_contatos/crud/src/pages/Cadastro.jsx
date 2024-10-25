import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { GlobalContext } from "../contexts/GlobalContext";
import './Cadastro.css'

function Cadastro() {
  const {contatoPref, setContatoPref, contatos, setContatos} = useContext(GlobalContext)
  const [inputNome, setInputNome] = useState("");
  function cadastrar() {
    // setContatoPref(inputNome)
    setContatos([...contatos, inputNome])
    console.log(contatos)
  }
  return (
    <div>
      <Navbar />
      <h1>Cadastre-se</h1>
      <div className="inputContainer">
        <label>Nome</label>
        <input
          type="text"
          value={inputNome}
          onChange={(event) => setInputNome(event.target.value)}
        />
      </div>
      <button onClick={cadastrar}>Cadastrar</button>
      <div className="contatos">
        {contatos.map( (contato, index) => (
          <div className="contato_card" key={index}>
            <p>{contato}</p>
          </div>
        ) )}
      </div>
    </div>
  );
}

export default Cadastro;
