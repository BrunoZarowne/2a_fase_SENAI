import React, { createElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './App.css'
  
export default function App() {
  function a() {
    const newDiv = document.createElement("div")
    const newContent = document.createTextNode("banana")
    newDiv.appendChild(newContent)

    const currentDiv = document.getElementById("div1")
    document.body.insertBefore(newDiv, currentDiv)
  }
  return (
    <div id='div1' className='carousel'>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item>
          <a href="https://github.com/BrunoZarowne/2a_fase_SENAI">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
      <button onClick={a}>sasas</button>
    </div>
  );
}

// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement

// site para ter uma base pro createElement no carousel