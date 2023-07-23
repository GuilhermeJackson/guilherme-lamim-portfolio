import { ContactEnum } from '../../models/enum/whats';
import Button from '../Button/Button';
import './WhoReceiverService.less'

interface WhoReceiverServiceProps {
  title: string;
  listReceiver: { title: string, description: string }[]
}
function WhoReceiverService({ title, listReceiver }: WhoReceiverServiceProps) {
  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  return (
    <div className='who-receiver-container'>
      <div className='who-receiver-title'>
        <h2>{title}</h2>
      </div>
      <div className='who-receiver-list-card'>
        {listReceiver.map((item, index) => {
          return <div key={index} className='who-receiver-list-item'>
            <div className='who-receiver-list-title'>
              <h2>{item.title}</h2>
            </div>
            <div className='who-receiver-list-subtitle'>
              <span>{item.description}</span>
            </div>
          </div>
        })}
      </div>
      <div className='who-receiver-button'>
      <Button textButton={'Vamos conversar'} handlerClick={handleWhatsAppClick} />

      </div>
    </div>
  )
}

export default WhoReceiverService
