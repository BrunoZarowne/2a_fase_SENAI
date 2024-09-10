import { useState} from 'react'
import './Atv_525.css'
import React from 'react'

function Atv_525() {
    const [podeOuNaoComprar, setpodeOuNaoComprar] = useState()

    function calcValorPraCompra(){
        let valorProduto = Number(prompt('Me diga qual o valor do produto que voce quer'))

        let moedasCincoCents = Number(prompt('Quantas moedas de 5 centavos tem no cofrinho'))
        let moedasDezCents = Number(prompt('Quantas moedas de 10 centavos tem no cofrinho'))
        let moedasVinteCincoCents = Number(prompt('Quantas moedas de 25 centavos tem no cofrinho'))
        let moedasCinquentaCents = Number(prompt('Quantas moedas de 50 centavos tem no cofrinho'))
        let moedasUmReal = Number(prompt('Quantas moedas de 1 real tem no cofrinho'))

        let totalMoedasCincoCents = moedasCincoCents * 0.25
        let totalMoedasDezCents = moedasDezCents * 0.10
        let totalMoedasVinteCincoCents = moedasVinteCincoCents * 0.25
        let totalMoedasCinquentaCents = moedasCinquentaCents * 0.50
        let valorTotalMoedas = totalMoedasCincoCents + totalMoedasDezCents +
        totalMoedasVinteCincoCents + totalMoedasCinquentaCents + moedasUmReal
        let texto

        if(valorTotalMoedas >= valorProduto){
            texto = 'pode'
            setpodeOuNaoComprar(texto)
        }else if (valorTotalMoedas < valorProduto){
            texto = 'não pode'
            setpodeOuNaoComprar(texto)
        }

    }

  return (
    <div className='containerAtv_525'>
      <h2>Calcular se pode ou não<br />comprar o produto</h2>
        <button onClick={calcValorPraCompra}>Digite o valor do produto</button>
        <div>
            voce {podeOuNaoComprar} comprar isso
        </div>
    </div>
  )
}

export default Atv_525
