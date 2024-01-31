import BannerCommercial from '../BannerCommercial/BannerCommercial'
import DescriptionService, { DescriptionServiceProps } from '../DescriptionService/DescriptionService'
import TitleSubtitleText from '../TitleSubtitleText/TitleSubtitleText'
import './Banner.less'


function Banner({titleDescription, subtitleDescription} : DescriptionServiceProps) {
  return (
    <div className='banner-container'>
        <TitleSubtitleText />
        <BannerCommercial />
        <DescriptionService
          titleDescription={titleDescription}
          subtitleDescription={subtitleDescription} />
    </div>
  )
}

export default Banner
