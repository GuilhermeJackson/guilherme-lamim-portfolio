import './Home.less'
import Aos from "aos";
import "aos/dist/aos.css";

import Banner from '../../components/Banner/Banner'
import ParticlesAnimation from '../../components/ParticlesAnimation/ParticlesAnimation'
import DescriptionAble from "../../components/DescriptionAble/DescriptionAble";

import { descriptionAble, providerService, whoReceiverService } from '../../data'

import WhoReceiverService from '../../components/WhoReceiverService/WhoReceiverService';
import DescriptionSkills from '../../components/DescriptionSkills/DescriptionSkills';
import Articles from '../../components/Articles/Articles';

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
        <Banner
          titleDescription={titleDescription}
          subtitleDescription={subtitleDescription} />
      </div>
      <DescriptionAble
        resume1={descriptionAble.resume1}
        resume2={descriptionAble.resume2}
        resume3={descriptionAble.resume3}
        resume4={descriptionAble.resume4} />
      <DescriptionSkills />
      <Articles
        title={providerService.title}
        listProvider={providerService.listService} />
      <WhoReceiverService
        title={whoReceiverService.title}
        listReceiver={whoReceiverService.listReceive} />

    </div>
  )
}

export default Home
