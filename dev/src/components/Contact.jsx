// import Fade from 'react-reveal'
import { Fade } from 'react-awesome-reveal';

export default function Contact() {
  return (
    <div id="contact" className="mt-28 pb-28">
      <Fade direction='bottom'>
      <h3 className="font-medium flex justify-center md:justify-center text-xl font-lato text-light-blue-600">
        Contact
      </h3>
      </Fade>
      <Fade direction='bottom'>
      <p className="text-3xl flex justify-center md:justify-center font-bold font-ubuntu text-foreground/80 mt-3">
        Hit Me Up! 🙌
      </p>
      </Fade>
      <Fade direction='bottom'>
      <p className="text-2xl m-2 flex justify-center md:justify-center font-semibold font-lato text-foreground/80 mt-5">
        ✉️
      <a className='ml-2' target="_blank" href="mailto: muhtadeetaron@gmail.com" rel="noreferrer">muhtadeetaron@gmail.com</a>
      </p>
      </Fade>
    </div>
  )
}
