import { ContactEnum } from '../../models/enum/whats';
import Button from '../Button/Button';
import './Portfolio.less'

interface PortfolioProps {
  title: string;
  listReceiver: { title: string, description: string, img: string, github: string, site: string }[]
}
function Portfolio({ title, listReceiver }: PortfolioProps) {
  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  return (
    <div className='who-receiver-container'>
      <div className='who-receiver-title'>
        <h2>{title}</h2>
      </div>
      <div className='who-receiver-list-card' >
        {listReceiver.slice().reverse().map((item, index) => {
          return <div key={index} className='who-receiver-list-item'>
            <div>
              <img src={item.img} />
              <div className='who-receiver-list-title-subtitle'>
                <div className='who-receiver-list-title'>
                  <h2>{item.title}</h2>
                </div>
                <div className='who-receiver-list-subtitle'>
                  <span>{item.description}</span>
                </div>
              </div>
            </div>
            <div className="who-receiver-list-buttons">
              {item.github === '' ? '' : <a href={item.github} target="_blank">GitHub</a>}
              {item.site === '' ? '' : <a href={item.site} target="_blank">Site</a>}
            </div>

          </div>
        })}
      </div>
      <div className='who-receiver-button'>
        <Button textButton={'Vamos conversar'}
          handlerClick={handleWhatsAppClick} />
      </div>
    </div>
  )
}

export default Portfolio
