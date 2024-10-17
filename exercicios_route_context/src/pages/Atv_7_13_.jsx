import React, { useState } from 'react'

function Atv_7_13_() {

    const [resultado, setResultado] = useState(true)
    const [arrayNumPares, setArrayNumPares] = useState()

    function pedirNumeros(){
        let NumUm = Number(prompt('Digite um numero'))
        let NumDois = Number(prompt('Digite mais um numero'))

        let arrayNumeros = []
        let arrayNumPares = []

        arrayNumeros.push(NumUm)
        
        while(NumUm != NumDois){
            NumUm++
            arrayNumeros.push(NumUm)

            if(NumUm%2 == 0){
                arrayNumPares.push(NumUm)
            }
        }
        setArrayNumPares(arrayNumPares)
    }

    function mostrarResultado(){
        if(resultado == true){
            setResultado(false)
        }else{
            setResultado(true)
        }
    }
  return (
    <div>
      <h1>Atv7.13</h1>
      <button onClick={pedirNumeros}>Clique aqui!!!</button>
      <div>
      <button onClick={mostrarResultado}>Resultado</button>
      </div>
      { resultado && <div>
        <label>O numeros pares são: {arrayNumPares}</label>
      </div>}
    </div>
  )
}

export default Atv_7_13_
