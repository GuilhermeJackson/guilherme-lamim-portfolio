import './BannerCommercial.less';
import { TbBrandAngular, TbBrandReact, TbBrandTypescript } from 'react-icons/tb';

function BannerCommercial() {
  const iconSize = 50
  const iconColor = '#fff'
  return (
    <div className="commercial-container">
      <div className='commercial-wrapper' data-aos="fade-left" data-aos-anchor="commercial-container">
        <div className='commercial-detail-item' data-aos="fade-right" data-aos-anchor="commercial-container">
          <div className='commercial-icon' ><TbBrandReact color={iconColor} size={iconSize} /></div>
          <div className='commercial-text'><span><strong>React</strong></span></div>
        </div>

        <div className='commercial-detail-item' data-aos="fade-right" data-aos-anchor="commercial-container">
          <div className='commercial-icon'><TbBrandAngular color={iconColor} size={iconSize} /></div>
          <div className='commercial-text'><span><strong>Angular</strong></span></div>
        </div>

        <div className='commercial-detail-item' data-aos="fade-right" data-aos-anchor="commercial-container">
          <div className='commercial-icon'><TbBrandTypescript color={iconColor} size={iconSize} /></div>
          <div className='commercial-text'><span><strong>Typescript</strong></span></div>
        </div>
      </div>
    </div>
  );
}

export default BannerCommercial;
