import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="mailto:kalishdesandy@gmail.com" target="_blank" rel='noreferrer'><SiGmail /></a>
        <a href="https://facebook.com/kalab.amssalu/" target="_blank" rel='noreferrer'><BsFacebook /></a>
        <a href="https://www.linkedin.com/in/kalab-amssalu-b26621226/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/KalabAmssalu" target="_blank" rel='noreferrer'><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank" rel='noreferrer'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials