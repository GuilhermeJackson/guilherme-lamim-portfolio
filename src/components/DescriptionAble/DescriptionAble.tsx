import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '../Button/Button';
import './DescriptionAble.less';
import { ContactEnum } from '../../models/enum/whats';

interface DescriptionAbleProps {
  title: string;
  list: string[];
  resume1: string;
  resume2: string;
  resume3: string;
}
const iconColor = '#108410';

function DescriptionAble({ title, list, resume1, resume2, resume3 }: DescriptionAbleProps) {
  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  return (
    <div className='able-container'>
      <div className='able-list'>
        <div className='able-title'>
          <h2>{title}</h2>
        </div>
        <div className='able-list-item'>
          {list.map((item, index) => (
            <div key={index} className='able-arrow-flex'>
              <BsCheckCircleFill size={16} color={iconColor} />
                <span>{item}</span><br /><br />
            </div>
          ))}
        </div>
      </div>

      <div className='able-resume'>
        <p><strong>{resume1}</strong></p>
        <p><strong>{resume2}</strong></p>
        <p><strong>{resume3}</strong></p>
        <Button textButton={'Vamos nessa!'} handlerClick={handleWhatsAppClick} />
      </div>
    </div>
  );
}

export default DescriptionAble;
