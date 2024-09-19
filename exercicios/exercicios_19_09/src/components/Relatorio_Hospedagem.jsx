import React from 'react'

function Relatorio_Hospedagem(props) {
  return (
    <div>
    <p>Relatório do oque foi gasto na hospedadgem:</p>
    <p>Valor Total: {props.infos.Valor_total}</p>
    <p>Valor do desconto de 10%: R${props.infos.valorDesconto10Perc}</p>
    <p>Valor do desconto de 15%: R${props.infos.valorDesconto15Perc}</p>
    <p>Valor da multa: R${props.infos.valorDaMulta}</p>
    <p>Valor final da hospedagem: R${props.infos.valorFinalDaHospedagem}</p>
  </div>
  )
}

export default Relatorio_Hospedagem
