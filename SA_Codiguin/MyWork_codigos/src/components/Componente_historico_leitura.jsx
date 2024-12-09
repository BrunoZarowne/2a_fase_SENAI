import React from 'react'
import { useContext } from 'react'
import './Componente_historico_leitura.css'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'


function Componente_historico_leitura() {

  const {obrasVisitadas} = useContext(GlobalContext)


  return (
    <div className='container_historico_de_leitura'>
      <ul>
        {obrasVisitadas.map((item) => (
          <li className='histObras' key={item.id}>
            <label>{item.title}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Componente_historico_leitura
