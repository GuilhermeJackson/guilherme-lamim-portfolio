import './TitleSubtitleText.less';

function TitleSubtitleText() {
  return (
    <div className='al-title-wrapper'>
      <div className='al-title'>
        <h2 >
          <span className="al-span-first-name" data-aos="fade-left" data-aos-anchor="al-title"
            data-aos-offset="10"
            data-aos-delay="100">
            Guilherme
          </span>
          <span className="al-span-last-name" data-aos="fade-right" data-aos-anchor="al-span-first-name">
            Lamim
          </span>
        </h2>
      </div>
      <div className='al-subtitle' data-aos="fade-left" data-aos-anchor="al-span-last-name">
        <span><strong>Desenvolvedor front-end</strong></span>
      </div>

    </div>
  );
}

export default TitleSubtitleText;
