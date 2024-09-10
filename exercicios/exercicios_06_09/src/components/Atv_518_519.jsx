import { useState} from 'react'
import React from 'react'
import './Atv_518_519.css'

function Atv_518_519() {
    const [resultado, setResultado] = useState()
    const [tempo, setTempo] = useState()


    function calcTempoDaCorrida(){
        let distanciaCorrida = Number(prompt('Qual a distancia da proxima corrida? (Km/s)'))
        let tempoDaViagem = 300000
        let qntTempoVaiLevar
        let tempoColocado
        let minutos, horas, dias, meses, anos
    

        qntTempoVaiLevar = distanciaCorrida / tempoDaViagem
        if(qntTempoVaiLevar >= 60){
            minutos = qntTempoVaiLevar / 60
            tempoColocado = 'minutos'
            setTempo(tempoColocado)
        }
        if(minutos >= 60){
            horas = minutos / 60
            tempoColocado = 'horas'
            setTempo(tempoColocado)
        }if(horas >= 24){
          dias = horas / 24
          tempoColocado = 'dias'
            setTempo(tempoColocado)
        }
        if(dias >= 30){
          meses = dias / 30
          tempoColocado = 'meses'
            setTempo(tempoColocado)
        }
        if(meses >= 12){
          anos = meses / 12
          tempoColocado = 'anos'
            setTempo(tempoColocado)
        }


       

        setResultado(qntTempoVaiLevar.toFixed(2))



    }

  return (
    <div className='containerAtv_518_519'>
      <h2>Tempo que vai levar a corrida</h2>
        <button onClick={calcTempoDaCorrida}>Digite a distancia da corrida</button>
        <div>
          <br />
          Vai levar: {resultado} {tempo} para chegar ao seu destino
          </div>
    </div>
  )
}

export default Atv_518_519


//deixei para ver oque eu errei no codigo :)


 // if(qntTempoVaiLevar < 60){
        //     tempoColocado = 'segundos'
        //     setTempo(tempoColocado)
        // }else if(qntTempoVaiLevar > 60 && qntTempoVaiLevar <= 3600){
        //     tempoColocado = 'minutos'
        //     qntTempoVaiLevar = qntTempoVaiLevar / 60
        //     setTempo(tempoColocado)
        // }else if(qntTempoVaiLevar > 3600 && qntTempoVaiLevar <= 86400){
        //     tempoColocado = 'horas'
        //     setTempo(tempoColocado)
        //     qntTempoVaiLevar = qntTempoVaiLevar / 60 / 60
        // }else if(qntTempoVaiLevar > 86400 && qntTempoVaiLevar <= 2592000){
        //     tempoColocado = 'dias'
        //     setTempo(tempoColocado)
        //     qntTempoVaiLevar = qntTempoVaiLevar / 24 / 60 / 60
        // }else if(qntTempoVaiLevar > 2592000  && qntTempoVaiLevar <= 31104000){
        //     tempoColocado = 'mes'
        //     setTempo(tempoColocado)
        //     qntTempoVaiLevar = qntTempoVaiLevar / 30 / 24 / 60 / 60
        // }