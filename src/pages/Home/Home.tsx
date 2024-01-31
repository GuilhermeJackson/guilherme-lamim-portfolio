import './Home.less'
import Aos from "aos";
import "aos/dist/aos.css";

import Banner from '../../components/Banner/Banner'
import ParticlesAnimationBackground from '../../components/ParticlesAnimationBackground/ParticlesAnimationBackground'

import { descriptionAble, providerService, whoReceiverService } from '../../data'

import Portfolio from '../../components/Portfolio/Portfolio';
import DescriptionSkills from '../../components/DescriptionSkills/DescriptionSkills';
import Articles from '../../components/Articles/Articles';
import AboutMe from '../../components/AboutMe/AboutMe';

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
        <ParticlesAnimationBackground />
      </div>
      <div className='home-banner' >
        <Banner
          titleDescription={titleDescription}
          subtitleDescription={subtitleDescription} />
      </div>
      <Portfolio
        title={whoReceiverService.title}
        listReceiver={whoReceiverService.listReceive} />
      <AboutMe
        resume1={descriptionAble.resume1}
        resume2={descriptionAble.resume2}
        resume3={descriptionAble.resume3}
        resume4={descriptionAble.resume4} />
      <DescriptionSkills />
      <Articles
        title={providerService.title}
        listProvider={providerService.listService} />
    </div>
  )
}

export default Home
