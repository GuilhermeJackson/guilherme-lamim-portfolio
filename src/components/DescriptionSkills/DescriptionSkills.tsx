import './DescriptionSkills.less';
import { BsCheckCircleFill } from 'react-icons/bs';
import { descriptionSkills } from '../../data'


function DescriptionSkills() {
  const iconColor = '#108410';
  return (
    <div className='skill-container'>
      <div>
        <h2>{descriptionSkills.title}</h2>
      </div>
      <div className='skill-list-item' >
        {descriptionSkills.list.map((item, index) => (
          <div key={index} className='skill-arrow-flex' data-aos="fade-right" data-aos-offset="-100">
            <BsCheckCircleFill size={16} color={iconColor} />
            <span>{item}</span><br /><br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DescriptionSkills;
