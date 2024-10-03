import React from 'react'
import './Atv_1050.css'

function Atv_1050() {
    function nmrDDD(){
        let DDDdigitado = Number(prompt('Digite um DDD para eu informar qual o distinatário é'))

        switch (DDDdigitado){
            case 48:
                alert('O destinatário é de Santa Catarina')
            break

            case 34:
                alert('O destinatário é de Minas Gerais')
            break

            case 11:
                alert('O destinatário é de  São Paulo')
            break

            case 69:
                alert('O destinatário é de Rondônia')
            break

            case 85:
                alert('O destinatário é do Ceará')
            break

            case 27:
                alert('O destinatário é do Espirito Santo')
            break

            default:
                alert('digitastes errado meu caro compatriota')
        }
    }
  return (
    <div className='tabelasDDD_NMR'>
      <div className='prtCima'>
        <label>DDD</label>
        <label>Destinatário</label>
      </div>
      <div className='prtBaixo'>
        <div className='DDD'>
            <label>48</label>
            <label>34</label>
            <label>11</label>
            <label>69</label>
            <label>85</label>
            <label>27</label>
        </div>
        <div className='destinatario'>
            <label>Santa Catarina</label>
            <label>Minas Gerais</label>
            <label>São Paulo</label>
            <label>Rondônia </label>
            <label>Ceará </label>
            <label>Espirito Santo</label>
        </div>
      </div>
      <button onClick={nmrDDD}>Clique aqui para<br/>descobrir o distinatárop</button>
    </div>
  )
}

export default Atv_1050
