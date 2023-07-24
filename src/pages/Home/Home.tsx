import './Home.less'
import Aos from "aos";
import "aos/dist/aos.css";

import Banner from '../../components/Banner/Banner'
import ParticlesAnimation from '../../components/ParticlesAnimation/ParticlesAnimation'
import DescriptionService from "../../components/DescriptionService/DescriptionService";
import DescriptionAble from "../../components/DescriptionAble/DescriptionAble";

import { descriptionAble, providerService } from '../../data'

import BannerCommercial from '../../components/BannerCommercial/BannerCommercial';
import ServiceProvider from '../../components/ServiceProvider/ServiceProvider';

function Home() {
  const titleDescription = `Escrevendo código limpo, elegante e eficiente`;
  const subtitleDescription = `Meu propósito é criar soluções modernas e inovadoras para facilitar a vida dos usuários`;

  Aos.init({
    duration: 1500,
    delay: 400,
  });

  return (
    <div className='home-container'>
      <div className='home-background'>
        <ParticlesAnimation />
      </div>
      <div className='home-banner' >
        <Banner />
        <BannerCommercial />
        <DescriptionService
          titleDescription={titleDescription}
          subtitleDescription={subtitleDescription} />
      </div>

      <DescriptionAble
        title={descriptionAble.title}
        list={descriptionAble.list}
        resume1={descriptionAble.resume1}
        resume2={descriptionAble.resume2}
        resume3={descriptionAble.resume3} 
        resume4={descriptionAble.resume4}/>

      <ServiceProvider
        title={providerService.title}
        listProvider={providerService.listService} />
      {/* <DescriptionPositiveService
        title={PositiveService.title}
        listPositive={PositiveService.listPositive} /> */}
      {/* <WhoReceiverService
        title={whoReceiverService.title}
        listReceiver={whoReceiverService.listReceive} /> */}

    </div>
  )
}

export default Home
