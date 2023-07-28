import Button from '../Button/Button';
import './DescriptionAble.less';
import { ContactEnum } from '../../models/enum/whats';
import PersonPicture from '../PersonPicture/PersonPicture';

interface DescriptionAbleProps {
  resume1: string;
  resume2: string;
  resume3: string;
  resume4: string;
}

function DescriptionAble({ resume1, resume2, resume3, resume4 }: DescriptionAbleProps) {
  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  return (
    <div className='able-container'>
      <PersonPicture />
      <div className='able-resume' data-aos="fade-right" data-aos-offset="-200">
        <span>{resume1}</span>
        <span>{resume2}</span>
        <span>{resume3}</span>
        <span>{resume4}</span>
        <Button textButton={'Entrar em contato!'} handlerClick={handleWhatsAppClick} />
      </div>
    </div>
  );
}

export default DescriptionAble;
