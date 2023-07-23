import './Button.less'
import { MdRocketLaunch } from 'react-icons/md'
interface ButtonProps {
  textButton: string;
  handlerClick: () => void;
}

function Button(props: ButtonProps) {
  return (
    <div className='button-container'>
      <button onClick={props.handlerClick}>
        <MdRocketLaunch  /> <span>{props.textButton}</span>
      </button>
    </div>
  )
}

export default Button
