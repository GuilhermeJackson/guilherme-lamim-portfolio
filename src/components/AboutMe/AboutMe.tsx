import './AboutMe.less';

interface AboutMeProps {
  me1: string;
  me2: string;
  me3: string;
}

function AboutMe({ me1, me2, me3 }: AboutMeProps) {
  return (
    <div className="about-container">
      <div className="about-text">
        <div className="about-me-1">
          <p>
            <span>{me1}</span>
          </p>
        </div>
        <div className="about-me-2">
          <p>
            <span>{me2}</span>
          </p>
        </div>
        <div className="about-me-3">
          <p>
            <span>{me3}</span>
          </p>
        </div>
      </div>
      <div className="about-image">
        {/* <img src={imgAboutMe} alt="About Me" /> */}
      </div>
    </div>
  );
}

export default AboutMe;
