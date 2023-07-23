import { ContactEnum } from '../../models/enum/whats';
import Button from '../Button/Button'
import './DescriptionService.less'

interface DescriptionServiceProps {
  titleDescription: string,
  subtitleDescription: string
}
function DescriptionService({titleDescription, subtitleDescription} : DescriptionServiceProps) {
  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  return (
    <div className='description-service-container'>
        <div className='description-service-wrapper'>
          <div className='description-service-title'>
            <h2>{titleDescription}</h2>
          </div>
          <div className='description-service-subtitle'>
            <div className='description-service-line' />
            <span>{subtitleDescription}</span>
          </div>
          <div className='description-service-button'>
            <Button textButton={'Vamos nessa!'} handlerClick={handleWhatsAppClick}></Button>
          </div>
        </div>

      </div>
  )
}

export default DescriptionService
