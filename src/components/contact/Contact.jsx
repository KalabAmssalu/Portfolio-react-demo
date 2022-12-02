import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_e14wepn', 'template_zp5mrxw', form.current, 'HTKBULGFBuUodUWja')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Kalishdesandy@gmail.com</h5>
            <a href="mailto:kalishdesandy@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>Kalish sandy</h5>
            <a href="https://m.me/kalishsandy" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+251922501999</h5>
            <a href="https://api.whatsapp.com/send?phone=251922501999" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full name' required/>
          <input type="email" name="name" placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact

