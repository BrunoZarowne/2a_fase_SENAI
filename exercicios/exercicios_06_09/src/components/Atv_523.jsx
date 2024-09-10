import { useState} from 'react'
import './Atv_523.css'
import React from 'react'

function Atv_523() {
    const [valorProduto, setvalorProduto] = useState()
    const [valorVenda, setvalorVenda] = useState()

    function valorProdutoVenda(){
        let valorDoProduto = Number(prompt('Qual o valor do produto que voce vai comprar? '))
        let percentualProduto
        let valorProdutoAdicional

        if(valorDoProduto >= 20){
            percentualProduto = valorDoProduto * 0.45
            valorProdutoAdicional = valorDoProduto + percentualProduto
            setvalorProduto(valorDoProduto)
            setvalorVenda(valorProdutoAdicional)
        }else if(valorDoProduto < 20){
            percentualProduto = valorDoProduto * 0.30
            valorProdutoAdicional = valorDoProduto + percentualProduto
            setvalorProduto(valorDoProduto)
            setvalorVenda(valorProdutoAdicional)
        }
    
    }
    

  return (
    <div className='containerAtv_523'>
      <h2>Lucro de compra vendedor</h2>
        <button onClick={valorProdutoVenda}>Digite o valor do produto que quer comprar</button>
        <div>
          <br />
          O valor do produto é de: {valorProduto} <br />
          O valor da venda é de: {valorVenda}
          </div>
    </div>
  )
}

export default Atv_523
