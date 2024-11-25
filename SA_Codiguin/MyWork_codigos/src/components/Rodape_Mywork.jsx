import React from 'react'
import './Rodape_Mywork.css'
function Rodape_Mywork() {
  return (
    <div className='container'>
        <div className='containerRodape'>
            <div>
                <img src="../images/logo_myWork.png" alt="" className='logoRodape'/>
                <div className='containerRedesSocias'>
                  <img src="./images/GithubLogo.svg" alt="logo do git hub" className='logoGit' />
                  <img src="./images/FacebookLogo.svg" alt="" className='logoFaceBook' />
                  <img src="./images/xLogo.svg" alt="logo antiga do twiter'passarinho azul' " className='logoTwiter' />
                  <img src="./images/Vector.svg" alt="logo do youtube" className='logoYoutube' />
                </div>

            </div>
            <div className='divEmails'><h1 className='h1Fotter'>Suporte</h1>
            <p className='emailAjuda'>Ajuda@Gmail.com</p>
            <p className='emailAjuda'>caioLorramValente@hotmail.com</p>
            <p className='emailAjuda'>vithorLorram@Yahoo.com</p>
            </div>
            
            <div><h1 className='h1Fotter'>Sobre nós</h1>
            <a href="" className='aSobreNos'>Sobre Nós</a>
            </div> {/* <-- div sobre informaçoes da equipe */}

            <div className='IntegrantesDiv'><h1 className='h1Fotter'>Integrantes</h1>
            <p className='nomes'>Caio lorram valente</p>
            <p className='nomes'>Vithor lorram valente</p>
            <p className='nomes'>Bruno</p>
            <p className='nomes'>Pedro</p>
            <p></p>
            </div>
   
        </div>
                <div className='divContorno'></div>
    </div>
  )
}

export default Rodape_Mywork
