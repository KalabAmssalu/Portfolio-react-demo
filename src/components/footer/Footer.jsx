import React from 'react'
import './footer.css'
import {FaFacebookF, FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="none" className='footer__logo'>KABA</a>
      
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services"> Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://facebook.com/kalab.amssalu/" target="_blank" rel='noreferrer'><FaFacebookF /></a>
      <a href="https://github.com/KalabAmssalu" target="_blank" rel='noreferrer'><FaGithub /></a>
        <a href="https://www.instagram.com/kalishdesandy"><FiInstagram /></a>
        <a href="https://twitter.com/KalabAmssalu"><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Kalab Amssalu. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer

