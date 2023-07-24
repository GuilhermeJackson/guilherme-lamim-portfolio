import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '../Button/Button';
import './DescriptionPositiveService.less';
import { ContactEnum } from '../../models/enum/whats';

interface DescriptionPositiveServiceProps {
  title: string;
  listPositive: string[]
}

function DescriptionPositiveService({ title, listPositive }: DescriptionPositiveServiceProps) {
  const iconColor = '#108410';

  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  
  return (
    <div className="positive-container">
      <div className='positive-wrapper'>

        <div className='positive-description'>
          <div className='positive-title'>
            <h2>{title}</h2>
          </div>
          <div className='positive-descriotion-first'>
            {listPositive.map((item, index) => {
              return <div key={index} data-aos="fade-right" data-aos-offset="-600">
                <BsCheckCircleFill size={16} color={iconColor} />
                <span>{item}</span><br /><br />
              </div>
            })}
          </div>
        </div>
      </div>
      <div className='positive-button'>
        <Button textButton={'Vamos conversar'} handlerClick={handleWhatsAppClick} />
      </div>
    </div>
  );
}

export default DescriptionPositiveService;
