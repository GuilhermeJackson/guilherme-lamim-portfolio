import { ContactEnum } from '../../models/enum/whats';
import Button from '../Button/Button'
import './ServiceProvider.less'


interface ServiceProviderProps {
  title: string;
  listProvider: { title: string, subtitle: string, description: string }[]
}

function ServiceProvider({ title, listProvider }: ServiceProviderProps) {
  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  return (
    <div className='provider-container'>
      <div className='provider-title'>
        <h2>{title}</h2>
      </div>
      <div className='provider-list-card'>

        {listProvider.map((item, index) => (
          <div key={index} className='provider-list-item'>
            <div className='provider-list'>
              <h2>{item.title}</h2>
            </div>
            <div className='provider-list-subtitle'>
              <span><strong>{item.subtitle}</strong></span>
            </div>
            <div className='provider-list-description'>
              <span>{item.description}</span>
            </div>
            <div className='provider-list-button'>
              <Button textButton={'Vamos nessa!'} handlerClick={handleWhatsAppClick} />
            </div>
          </div>
        ))}

        <div className=''></div>
      </div>
    </div>
  )
}

export default ServiceProvider
