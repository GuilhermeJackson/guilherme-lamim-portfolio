import './Home.less'
import Banner from '../../components/Banner/Banner'
import ParticlesAnimation from '../../components/ParticlesAnimation/ParticlesAnimation'
import DescriptionService from "../../components/DescriptionService/DescriptionService";
import DescriptionAble from "../../components/DescriptionAble/DescriptionAble";
import ServiceProvider from '../../components/ServiceProvider/ServiceProvider';
import WhoReceiverService from '../../components/WhoReceiverService/WhoReceiverService';

import { descriptionAble } from '../../data'
import { providerService } from '../../data'
import { whoReceiverService } from '../../data'
import { PositiveService } from '../../data'

import DescriptionPositiveService from '../../components/DescriptionPositiveService/DescriptionPositiveService';
import BannerCommercial from '../../components/BannerCommercial/BannerCommercial';

function Home() {
  const titleDescription = `Dedicados a oferecer soluções tecnológicas e inovadoras para empresas e empreendedores.`;
  const subtitleDescription = `Desenvolvimento de software, websites, aplicativos e outsourcing.`

  return (
    <div className='home-container'>
      <div className='home-background'>
        <ParticlesAnimation />
      </div>
      <div className='home-banner'>
        <Banner />
      </div>
      <BannerCommercial />
      <DescriptionService
        titleDescription={titleDescription}
        subtitleDescription={subtitleDescription} />
      <DescriptionAble
        title={descriptionAble.title}
        list={descriptionAble.list}
        resume1={descriptionAble.resume1}
        resume2={descriptionAble.resume2}
        resume3={descriptionAble.resume3} />
      <ServiceProvider
        title={providerService.title}
        listProvider={providerService.listService} />
      <DescriptionPositiveService
        title={PositiveService.title}
        listPositive={PositiveService.listPositive} />
      <WhoReceiverService
        title={whoReceiverService.title}
        listReceiver={whoReceiverService.listReceive} />
       
    </div>
  )
}

export default Home
