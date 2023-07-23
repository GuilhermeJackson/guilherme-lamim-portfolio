import { ContactEnum } from '../../models/enum/whats'
import './Footer.less'

function Footer() {
  
  return (
    <footer className='footer-container'>
      <div className='footer-row'></div>
      <div className='footer-wrapper'>
        <div className='footer interprise'>
          <div className='footer-logo'>
            <span>Guilherme</span>
            <span>Lamim</span>
          </div>
          <div className='footer-reserv-direct'>
            <span>@Guilherme Lamim - 2023</span>
            <span>Todos os direios reservados.</span>
          </div>
        </div>
        <div className='footer-terms-politics'>
          <a href='/home'>Politica de privacidade</a>
        </div>
        <div className='footer-talk-we'>
          <span>Entre em contato</span>
          <a href={ContactEnum.whats}>Whatsapp</a>
          <a href={ContactEnum.linkedin}>Linkedin</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
