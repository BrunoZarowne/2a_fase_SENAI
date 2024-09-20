import './Atv_7_11.css'
import React, { useState } from 'react'

function Atv_7_11() {
  const [qntTempoVaiLevar, setQntTempoVaiLevar] = useState()
    function tempoVaiLevar(){
        let valentina = 1.50
        let enzo = 1.40
        let anos = 0

        while(enzo != valentina){
            valentina = valentina + 0.02
            enzo = enzo + 0.03
            anos++
        }
        setQntTempoVaiLevar(anos)
    }
  return (
    <div className='container_7_11'>
      <p>Valentina, a irmã do Mano Juca tem 1.50m e <br />cresce 2 centímetros por ano,
        enquanto Enzo,<br /> o irmão mais novo, tem 1.40m e cresce 3 <br />centímetros por
        ano. Clique no botão para<br /> ver em quantos anos Enzo passará Valentina</p>
        <button onClick={tempoVaiLevar}>Clique para ver quanto tempo<br />enzo alcançara valentina</button>
    </div>
  )
}

export default Atv_7_11
/*
valentina tem 1.50m e cresce 2 cm por ano
enzo tem tem 1.40m e cresce 3 cm por ano
em qnts anos enzo sera mais alto
*/