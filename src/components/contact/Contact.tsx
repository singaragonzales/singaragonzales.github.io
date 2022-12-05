import { Fox } from '../../assets/image'
import "./contact.scss"

const Contact = () => {
  return (
    <section className="slide-out !p-0">
        <section className="contact__container">
            <div className="contact section contact__box  wrapper  pad-before" id="contact">
                <div className='max-w-[500px]'>
                    <h2 className="contact__title">Hey there!</h2>
                    <p className="contact__subtitle">If you want to contact me you can do it through this email {" "}
                        <a href='mailto:singara.gonzales@gmail.com' rel="noreferrer" target="_blank" className='underline' aria-label="Send me an email">singara.gonzales@gmail.com</a>, 
                        or send me a message on <a href='#home' className='underline' aria-label="Go to my social networks buttons">social networks</a>.
                    </p>
                </div>
                <div className="generator__shape">
                    <img src={Fox} alt="fox_pc" />
                </div>
            </div>
            
        </section>
    </section>
  )
}

export default Contact