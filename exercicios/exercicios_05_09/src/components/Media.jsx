import { useState} from 'react'
import './Media.css'
function Media() {
    const [resultado, setResultado] = useState()
    function calcMedia(){
        let nota1 = Number(prompt('digite o primeiro numero: '))
        let nota2 = Number(prompt('digite o segundo numero: '))
        let media = (nota1 + nota2) / 2
        setResultado(media)
    }
  return (
    <div className='MediaContainer'>
        <h2>Exercicio para calcular a media de 2 numeros</h2>
        <button onClick={calcMedia}>Calcular</button>
     <div>
       Media: {resultado}
     </div>
      
    </div>
  )
}

export default Media
