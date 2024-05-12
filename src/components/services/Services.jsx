import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Gofer Ecommerce.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Tiver Driving School.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Rhino Plc wordpress website.</p>
              </li>
              
             
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>WebBuilder Software as a service.</p>
                
              </li>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Tiver Driving School Information Management System.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Gofer Ecommerce website.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Rhino Plc Offical website modification.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>University of Gondar Student Admission system.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Rhino Plc wordpress website.</p>
              </li>
             
              
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Mobile Application</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' /> 
                <p>Todo Application.</p>
              </li>
             
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Desktop Application</h3>
            </div>
            <ul className='service__list'>
            <li>
                <BiCheck className='service__list-icon' /> 
                <p>University of Gondar Bus scheduling system.</p>
              </li>
              
            </ul>
          </article>
        </div>
      </section>
    
  )
}

export default Services
