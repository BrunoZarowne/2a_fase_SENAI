import React from 'react'
import './Atv_1038.css'

function Atv_1038() {
    function CalcValorFinal(){
        let codProdutoEscolhido = Number(prompt('Digite qual o codigo do produto que vai querer'))
        let qntsProdutos = Number(prompt('Me diga quantos desse vai querer'))
        let valorFinal

        switch (codProdutoEscolhido){
            case 1:
                valorFinal = 4.50 * qntsProdutos
            break

            case 2:
                valorFinal = 8.00 * qntsProdutos
            break

            case 3:
                valorFinal = 12.00 * qntsProdutos
            break

            case 4:
                valorFinal = 2.50 * qntsProdutos
            break

            case 5:
                valorFinal = 2.50 * qntsProdutos
            break
        }
        alert('O total que voce deve é R$' + valorFinal.toFixed(2))
    }
  return (
    <div className='divTabela'>
      <div className='ptCimaTabela'>
        <label>Codigo</label>
        <label>Produto</label>
        <label>Preço</label>
      </div>
      <div className='precosInfosValores'>
        <div className='codItens'>
            <label>1</label>
            <label>2</label>
            <label>3</label>
            <label>4</label>
            <label>5</label>
        </div>
        <div className='produtos'>
            <label>Cacorro-quente</label>
            <label>Batata frita</label>
            <label>Hamburguer</label>
            <label>Coca-cola</label>
            <label>Guarana</label>
        </div>
        <div className='valores'>
            <label>R$4,50</label>
            <label>R$8,00</label>
            <label>R$12,00</label>
            <label>R$2,50</label>
            <label>R$2,50</label>
        </div>
      </div>
      <button onClick={CalcValorFinal}>Clique aqui para<br/>fazer seu pedido</button>
    </div>
  )
}

export default Atv_1038
