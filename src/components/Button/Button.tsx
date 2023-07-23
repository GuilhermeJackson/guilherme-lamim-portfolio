import { ContactEnum } from '../../models/enum/whats';
import './Button.less'
import { MdRocketLaunch } from 'react-icons/md'
interface ButtonProps {
  textButton: string;
  handlerClick: Function
}

function Button(props: ButtonProps) {
  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };
  return (
    <div className='button-container'>
      <button onClick={handleWhatsAppClick}><MdRocketLaunch color="#fff" /> <span>{props.textButton}</span></button>
    </div>
  )
}

export default Button
