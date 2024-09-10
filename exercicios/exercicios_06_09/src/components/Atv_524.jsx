import { useState} from 'react'
import './Atv_524.css'
import React from 'react'

function Atv_524() {
    const [mediaNota, setmediaNota] = useState()

    function calcMediaAluno(){
        let notaUm = Number(prompt('Me diga qual foi a sua primeira nota'))
        let notaDois = Number(prompt('Me diga qual foi a sua segunda nota'))
        let mediaNotaAluno
        let mediaFinal

        mediaNotaAluno = (notaUm + notaDois) / 2

        switch (true){
            case (mediaNotaAluno >= 9) && (mediaNotaAluno == 10):
                mediaFinal = 'A'
                setmediaNota(mediaFinal)
            break

            case (mediaNotaAluno >= 7.5) && (mediaNotaAluno < 9):
                mediaFinal = 'B'
                setmediaNota(mediaFinal)
            break

            case (mediaNotaAluno >= 6) && (mediaNotaAluno < 7.5):
                mediaFinal = 'C'
                setmediaNota(mediaFinal)
            break

            case (mediaNotaAluno >= 4) && (mediaNotaAluno < 6):
                mediaFinal = 'D'
                setmediaNota(mediaFinal)
            break

            case (mediaNotaAluno >= 0) && (mediaNotaAluno < 4):
                mediaFinal = 'E'
                setmediaNota(mediaFinal)
            break
        }
    }

  return (
    <div className='containerAtv_524'>
      <h2>Calcular a media do aluno</h2>
        <button onClick={calcMediaAluno}>Digite quais são as suas notas</button>
        <div>
          <br />
          A sua média é de: {mediaNota}
          </div>
    </div>
  )
}

export default Atv_524
