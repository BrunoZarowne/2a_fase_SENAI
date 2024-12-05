import React from 'react'
import { useContext } from 'react'
import './Componente_historico_leitura.css'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'


function Componente_historico_leitura() {

  const {obrasVisitadas} = useContext(GlobalContext)


  return (
    <div className='container_historico_de_leitura'>
     <ul className='historicoVisitas'>
      {obrasVisitadas.map ( (number) => <li key={number.toString()} className='a'>{number}</li>)}
     </ul>
    </div>
  )
}

export default Componente_historico_leitura
