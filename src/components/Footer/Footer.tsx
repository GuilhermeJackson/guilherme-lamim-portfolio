import { ContactEnum } from '../../models/enum/whats'
import './Footer.less'

function Footer() {
  
  return (
    <footer className='footer-container'>
      <div className='footer-row'></div>
      <div className='footer-wrapper'>
        <div className='footer interprise'>
          <div className='footer-logo'>
            <span>Guila</span>
            <span>Tech</span>
          </div>
          <div className='footer-reserv-direct'>
            <span>@Guila Tech - 2023</span>
            <span>Todos os direios reservados.</span>
          </div>
        </div>
        <div className='footer-terms-politics'>
          <a href='/home'>Politica de privacidade</a>
        </div>
        <div className='footer-talk-we'>
          <span>Fale com a gente</span>
          <a href={ContactEnum.whats}>Agendar um orçamento</a>
          <a href={ContactEnum.whats}>Faça parte do time</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
