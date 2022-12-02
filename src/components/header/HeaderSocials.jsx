import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://gmail.com" target="_blank" rel='noreferrer'><SiGmail /></a>
        <a href="https://facebook.com" target="_blank" rel='noreferrer'><BsFacebook /></a>
        <a href="https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel='noreferrer'><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank" rel='noreferrer'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials