import React from 'react'
import './about.css'
import ME from '../../asset/kalab.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt quo sint fuga reiciendis nesciunt. Fuga eum, nihil repudiandae explicabo porro non facere aliquam quae unde, provident nulla iusto eaque harum omnis quis pariatur deserunt vitae reprehenderit cupiditate maiores? Quasi, accusantium distinctio in nisi error fuga nemo magnam. Explicabo, deleniti quas! Explicabo dolores hic ipsum odio, at distinctio qui cumque officiis asperiores possimus, sequi delectus? Vero accusantium itaque repellat vel, blanditiis porro, quaerat a quis distinctio nobis nostrum tempore esse eligendi, fugiat voluptatibus hic quisquam eius provident deserunt repudiandae quia officia expedita odio! Non nulla, eaque sint sapiente harum beatae. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section> 
  )
}

export default About
