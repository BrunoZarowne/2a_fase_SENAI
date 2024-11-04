import React, { useState } from 'react';
import './Comentarios.css'

const Comentarios = () => {
  const [comentarios, setComenarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [nComentarios, setNComentarios] = useState(0);

  const Postar = () => {
    if (novoComentario.trim()) {
      setComenarios([...comentarios, novoComentario]);
      setNovoComentario('');
      setNComentarios(nComentarios + 1)
    }
  };

  return (
    <div className='contComentarios'>
      <label>{nComentarios} Comentários</label><br />
      <textarea
        value={novoComentario}
        onChange={(e) => setNovoComentario(e.target.value)}
        cols="80"
        rows="4"
      />
      <br />
      <button onClick={Postar}>Postar</button>
      <div id="containerComentarios">
        {comentarios.map((comentarios, index) => (
          <p className='comentarios' key={index}>"User"<br/>{comentarios}</p>
        ))}
      </div>
    </div>
  );
};

export default Comentarios;
