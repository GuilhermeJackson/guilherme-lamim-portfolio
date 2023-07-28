import './TitleSubtitleText.less';

function TitleSubtitleText() {
  return (
    <div className='al-title-wrapper'>
      <div className='al-title'>
        <h2 >
          <span className="al-span-first-name" data-aos="fade-right" data-aos-offset="-500">
            Guilherme
          </span>
          <span className="al-span-last-name" data-aos="fade-right" data-aos-offset="-500">
            Lamim
          </span>
        </h2>
      </div>
      <div className='al-subtitle' >
        <span><strong>Desenvolvedor front-end</strong></span>
      </div>

    </div>
  );
}

export default TitleSubtitleText;
