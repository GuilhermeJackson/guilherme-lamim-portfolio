import './BannerCommercial.less';
import { TbDeviceAnalytics } from 'react-icons/tb'
import { HiUserGroup,  } from 'react-icons/hi'
import {  HiMiniRocketLaunch } from 'react-icons/hi2'

function BannerCommercial() {
  return (
    <div className="commercial-container">
      <div className='commercial-wrapper'>
        <div className='commercial-detail-item'>
          <div className='commercial-icon'><TbDeviceAnalytics size={50} /></div>
          <div className='commercial-text'><span><strong>Desenvolvimento de Software Personalizado</strong></span></div>
        </div>

        <div className='commercial-detail-item'>
          <div className='commercial-icon'><HiMiniRocketLaunch size={50} /></div>
          <div className='commercial-text'><span><strong>Websites Profissionais e Aplicativos Móveis</strong></span></div>
        </div>

        <div className='commercial-detail-item'>
          <div className='commercial-icon'><HiUserGroup size={50} /></div>
          <div className='commercial-text'><span><strong>Outsourcing</strong></span></div>
        </div>
      </div>
    </div>
  );
}

export default BannerCommercial;
