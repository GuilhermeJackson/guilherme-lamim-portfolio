import Button from '../Button/Button'
import './Articles.less'


interface ArticlesProps {
  title: string;
  listProvider: { title: string, subtitle: string, description: string, url: string }[]
}

function Articles({ title, listProvider }: ArticlesProps) {
  const handleWhatsAppClick = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <div className='aticles-container'>
      <div className='aticles-title'>
        <h2>{title}</h2>
      </div>
      <div className='aticles-list-card' data-aos="fade-right" data-aos-offset="-600">

        {listProvider.slice().reverse().map((item, index) => (
          <div key={index} className='aticles-list-item'>
            <div className='aticles-list'>
              <h2>{item.title}</h2>
            </div>
            <div className='aticles-list-subtitle'>
              <span><strong>{item.subtitle}</strong></span>
            </div>
            <div className='aticles-list-description'>
              <span>{item.description}</span>
            </div>
            <div className='aticles-list-button'>
              <Button textButton={'Ler artigo!'} handlerClick={() => handleWhatsAppClick(item.url)} />
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  )
}

export default Articles
