import React from 'react'
import { useState } from 'react'
import './Atv_7_10.css'

function Atv_7_10() {
  const [maiorPessoa, setMaiorPessoa] = useState('')
  const [menorPessoa, setMenorPessoa] = useState('')
  const [mediaPessoas, setMediaPessoas] = useState('')
  const [mediaMulheres, setMediaMulheres] = useState('')
  const [percentualHomens, setPercentualHomens] = useState('')

    function calcMediaAltura_PercentualHomen(){
      const pessoaAlturaArray = []
      const alturaMulheres = []
      let homens = 0
      let mulheres = 0
      for (let i = 0; i < 10; i++){
        let generoPessoa = Number(prompt('Me diga seu genero se for homen = 0, se for mulher = 1'))
        let pessoaAltura = Number(prompt('Agora poderia me falar sua altura?(em cm)'))
        if(generoPessoa == 0){
          homens++
        }else if(generoPessoa == 1){
          alturaMulheres.push(pessoaAltura)
          mulheres++
        }else{
          alert('coe truta digita oq eu pedi')
        }
        
        pessoaAlturaArray.push(pessoaAltura)
      }
      //percentual dos homens
      let mediaHomens = homens * 10
      setPercentualHomens(mediaHomens)
      //percentual dos homens

      //maior e menor pessoa
      let pessoaMaior = Math.max.apply(null, pessoaAlturaArray)
      setMaiorPessoa(pessoaMaior)
      let pessoaMenor = Math.min.apply(null, pessoaAlturaArray)
      setMenorPessoa(pessoaMenor)
      //maior e menor pessoa

      //media altura população
      let soma = 0
      for(let i = 0; i < pessoaAlturaArray.length; i++){
        soma+=pessoaAlturaArray[i]
      }
      const media = soma / pessoaAlturaArray.length
      setMediaPessoas(media)
      //media altura população
      
      //media altura mulheres
      let somaAlturaMulheres = 0
      for(let i = 0; i < alturaMulheres.length; i++){
        somaAlturaMulheres+=alturaMulheres[i]
      }
      const mediaAlturaMulheres = somaAlturaMulheres / alturaMulheres.length
      setMediaMulheres(mediaAlturaMulheres)
      //media altura mulheres

    }

  return (
    <div className='container_7_10'>
      <p>Clique aqui e me diga sua altura</p>
      <button onClick={calcMediaAltura_PercentualHomen}>Clique Aqui!</button>
      <div>
        <br />
        A maior altura é de: {maiorPessoa}<br />
        A menor sendo: {menorPessoa}<br />
        A media de altura das mulheres sendo: {mediaMulheres}<br />
        A media de altura da população sendo: {mediaPessoas}<br />
        E o percentual de homens é de: {percentualHomens}%
      </div>
    </div>
  )
}

export default Atv_7_10

/*
pegar altura de 10 pessoas
ver a pessoa mais alta e a mais baixa
media de altura das mulheres
media de altura de população
percentual de homens na população
*/