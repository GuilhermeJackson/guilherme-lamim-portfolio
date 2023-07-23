import './ActionList.less'
import TitleSubtitleText from '../../components/TitleSubtitleText/TitleSubtitleText'
import { TbMessageDollar, TbDeviceDesktop, TbBrandWhatsapp } from 'react-icons/tb'
import { TfiGallery } from 'react-icons/tfi'

function ActionList() {
  const whats = 'https://api.whatsapp.com/send?phone=5547991056721&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento.%0APodemos%20discutir%20mais%20detalhes?';

  return (
    <div className='al-container'>
      <div className='al-list-action'>
        <TitleSubtitleText />
        <div className='al-list-buttons'>
          <a href={whats} target="_blank">
            <div className='al-item-button' >
              <div className='al-icon-button'><TbMessageDollar size={32} /></div>
              <div className='al-title-button'><span>solicitar um orçamento</span></div>
            </div>
          </a>
          <a href='/home'>
            <div className='al-item-button'>
              <div className='al-icon-button'><TbDeviceDesktop size={32} /></div>
              <div className='al-title-button'><span>conheça meu site</span></div>
            </div>
          </a>
          <a href={whats} target="_blank">
            <div className='al-item-button'>
              <div className='al-icon-button'><TfiGallery size={32} /></div>
              <div className='al-title-button'><span>confira meu portfólio</span></div>
            </div>
          </a>
          <a href={whats} target="_blank">
            <div className='al-item-button'>
              <div className='al-icon-button'><TbBrandWhatsapp size={32} /></div>
              <div className='al-title-button'><span>tire suas dúvidas</span></div>
            </div>
          </a>
        </div>
        <div className='al-social-media'>

        </div>
      </div>
    </div>
  )
}

export default ActionList
