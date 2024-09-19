import React, { useState } from 'react'
import Relatorio_Hospedagem from './Relatorio_Hospedagem'
import './Atv_5_7.css'

function Atv_5_7() {
    const [inputValor, setInputValor] = useState("")
    const [relatorioHospedagem, setRelatorioHospedagem] = useState()
      function calcUsuarioDeve(){
        let qntsDiasUsuarioVaiFicar = inputValor
        let valor5Dias = 100
        let valor6_10Dias = 90
        let valor11Dias = 80
        let valorMulta = 150
        let valorInicialQueSeraPago
        let valorFinalMenosMulta
        let valorDesc10Perc
        let valorDesc15Perc
        let valorFinal

        if (qntsDiasUsuarioVaiFicar <= 5){
          valorInicialQueSeraPago = qntsDiasUsuarioVaiFicar * valor5Dias
          valorFinalMenosMulta = valorInicialQueSeraPago - valorMulta
          valorDesc10Perc = valorInicialQueSeraPago * 0.10
          valorDesc15Perc = valorInicialQueSeraPago * 0.15
          valorFinal = valorInicialQueSeraPago - valorDesc10Perc - valorDesc15Perc - valorMulta

          let infosHospedagem = {
              Valor_total: valorInicialQueSeraPago,
              valorDesconto10Perc: valorDesc10Perc,
              valorDesconto15Perc: valorDesc15Perc,
              valorDaMulta: valorMulta,
              valorFinalDaHospedagem: valorFinal

          }
          setRelatorioHospedagem(infosHospedagem)
          
        }else if (qntsDiasUsuarioVaiFicar >= 6 && qntsDiasUsuarioVaiFicar <= 11){
          valorInicialQueSeraPago = qntsDiasUsuarioVaiFicar * valor6_10Dias
          valorFinalMenosMulta = valorInicialQueSeraPago - valorMulta
          valorDesc10Perc = valorInicialQueSeraPago * 0.10
          valorDesc15Perc = valorInicialQueSeraPago * 0.15
          valorFinal = valorInicialQueSeraPago - valorDesc10Perc - valorDesc15Perc - valorMulta

          let infosHospedagem = {
            Valor_total: valorInicialQueSeraPago,
            valorDesconto10Perc: valorDesc10Perc,
            valorDesconto15Perc: valorDesc15Perc,
            valorDaMulta: valorMulta,
            valorFinalDaHospedagem: valorFinal

        }
        setRelatorioHospedagem(infosHospedagem)
        }else if (qntsDiasUsuarioVaiFicar > 11){
          valorInicialQueSeraPago = qntsDiasUsuarioVaiFicar * valor11Dias
          valorFinalMenosMulta = valorInicialQueSeraPago - valorMulta
          valorDesc10Perc = valorInicialQueSeraPago * 0.10
          valorDesc15Perc = valorInicialQueSeraPago * 0.15
          valorFinal = valorInicialQueSeraPago - valorDesc10Perc - valorDesc15Perc - valorMulta

          let infosHospedagem = {
            Valor_total: valorInicialQueSeraPago,
            valorDesconto10Perc: valorDesc10Perc,
            valorDesconto15Perc: valorDesc15Perc,
            valorDaMulta: valorMulta,
            valorFinalDaHospedagem: valorFinal

        }
        setRelatorioHospedagem(infosHospedagem)
        }
      }
    


  return (
    <div className='container_5_7'>
        <label htmlFor="qntsDiasVaiFicar">Quantos dias vai ficar na pousada?</label>
        <input type = "text" id='qntsDiasVaiFicar' 
            value = {inputValor}
            onChange = { (event) => setInputValor(event.target.value)}
          /><br />
          <button onClick={calcUsuarioDeve}>Clique aqui para ver<br />quanto voce deve</button>

          {relatorioHospedagem &&
           <Relatorio_Hospedagem infos = { relatorioHospedagem } />
          }
    </div>
  )
  }

export default Atv_5_7

/*
se for ficar até 5 dias R$100,00 a diaria
de 6 a 10 dias R$90,00 a diaria
apartir de 11 dias R$80,00 a diaria
teve um primeiro desconto de 10%
outro de 15% - se juntam porem deixar
separado para mostrar os resultados
e teve R$150,00 de multa por uns bagulho ai

Criar um programa que lê o número de dias que
ele vai ficar no albergue  e apresente o valor
final da conta e sua composição (os detalhes, 
pagamentos, descontos...)
*/