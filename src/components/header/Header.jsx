import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../asset/kalab.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
      	<h5>Hello I'm</h5>
        <h1>Kalab Amssalu</h1>
        <h5 className="text-light">Programmer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#footer" className="scroll__down">Scroll Down</a>
        
      </div>
    </header>
   
  )
}

export default header


