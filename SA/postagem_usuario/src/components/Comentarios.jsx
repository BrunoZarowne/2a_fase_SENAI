import React, { useState } from 'react';
import './Comentarios.css'

const Comentarios = () => {
  const [comentarios, setComenarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');

  const Postar = () => {
    if (novoComentario.trim()) {
      setComenarios([...comentarios, novoComentario]);
      setNovoComentario('');
    }
  };

  return (
    <div className='contComentarios'>
      <h1>Please add your comment</h1>
      <div id="containerComentarios">
        {comentarios.map((comentarios, index) => (
          <p className='s' key={index}>{comentarios}</p>
        ))}
      </div>
      <textarea
        value={novoComentario}
        onChange={(e) => setNovoComentario(e.target.value)}
        cols="60"
        rows="5"
      />
      <br />
      <button onClick={Postar}>Post</button>
    </div>
  );
};

export default Comentarios;
