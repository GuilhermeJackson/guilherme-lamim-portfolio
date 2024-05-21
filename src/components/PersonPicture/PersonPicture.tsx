import './PersonPicture.less'
import img from '../../assets/GuilhermeLamimReactAngularJavaJavascriptTypescriptDesenvolvedor2.jpg'

function PersonPicture() {
  return (
    <section>
      <div className='picture-wrapper'>
        <img src={img} />
      </div>
    </section>
  )
}

export default PersonPicture
