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
              <small>4+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>I'm a dedicated and adaptable individual with a passion for problem-solving and continuous learning.
My background in designing, project management and full-stack web development has equipped me
with strong technical and leadership skills. I enjoy a challenge, and I'm constantly looking for novel
solutions to difficult issues. As a team player, I encourage cooperation to accomplish shared objectives.
I'm a lifelong learner who is always pursuing new interests and remaining receptive to different
viewpoints. With a commitment to excellence and a growth mindset, I bring a valuable blend of technical
proficiency, leadership, and a curious spirit to any endeavor. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section> 
  )
}

export default About
