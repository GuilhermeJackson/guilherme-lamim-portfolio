import './ActionList.less'
import { TbMessageDollar, TbDeviceDesktop, TbBrandWhatsapp, TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { ContactEnum } from '../../models/enum/whats';
function ActionList() {
  const iconSize = 32;

  return (
    <div className='al-container'>
      <div className='al-list-action'>
        <div className='al-title-action'>
          <h1>Guilherme Lamim</h1>
          <h2>Desenvolvedor front-end</h2>
        </div>
        <div className='al-list-buttons'>
          <a href={ContactEnum.whats} target="_blank">
            <div className='al-item-button' >
              <div className='al-icon-button'><TbMessageDollar size={iconSize} /></div>
              <div className='al-title-button'><span>solicitar um orçamento</span></div>
            </div>
          </a>
          <a href='/home'>
            <div className='al-item-button'>
              <div className='al-icon-button'><TbDeviceDesktop size={iconSize} /></div>
              <div className='al-title-button'><span>conheça meu site</span></div>
            </div>
          </a>
          <a href={ContactEnum.whats} target="_blank">
            <div className='al-item-button'>
              <div className='al-icon-button'><TbBrandWhatsapp size={iconSize} /></div>
              <div className='al-title-button'><span>tire suas dúvidas</span></div>
            </div>
          </a>
        </div>
        <div className='al-social-media'>
          <div className='al-social-circle'>
            <a href={ContactEnum.github} target='__blank'>
              <div className='al-icon-social'>
                <TbBrandGithub size={iconSize} />
              </div>
            </a>
          </div>
          <div className='al-social-circle'>
            <a href={ContactEnum.linkedin} target='__blank'>
              <div className='al-icon-social'>
                <TbBrandLinkedin size={iconSize} />
              </div>
            </a>
          </div>
          <div className='al-social-circle'>
            <a href={ContactEnum.whats} target='__blank'>
              <div className='al-icon-social'>
                <TbBrandWhatsapp size={iconSize} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionList
