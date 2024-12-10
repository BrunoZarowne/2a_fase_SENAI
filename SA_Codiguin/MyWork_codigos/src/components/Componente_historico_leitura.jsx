import React from 'react'
import { useContext } from 'react'
import './Componente_historico_leitura.css'
import { GlobalContext } from '../context/GlobalContext'


function Componente_historico_leitura() {

  const {obrasVisitadas} = useContext(GlobalContext)


  return (
    <div className='container_historico_de_leitura'>
      <ul>
        {obrasVisitadas.map((item) => (
          <li className='histObras' key={item.id}>
            <label className='lblUm'>{item.title}</label>
            <label className='lblDois'>{item.time}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Componente_historico_leitura
