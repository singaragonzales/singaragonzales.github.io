import { Send } from '../../assets/svg';
import { TypeAnimation } from 'react-type-animation';

const Data = () => {
  
  return (
    <div className="home__data">
      <h1 className="home__hello_thin">Hello, I'm </h1>
      
        <TypeAnimation
          sequence={[' Singara Gonzales', 2000]}
          className="home__title"
          wrapper="div"
          repeat={0}
          cursor={false}
        />
      <p className="home__description flex items-center">
        I'm a Software developer based on Lima, Peru with +4 years of experience programming web systems. <br/>
        Willing to perform tasks that imply a challenge for my training and the growth of the company.
      </p>
      <div className="button button--flex"
        onClick={() =>{
          window.scrollTo(0, document.body.scrollHeight);
        }}
      >Contact Me <Send /></div>
    </div>
  )
}

export default Data