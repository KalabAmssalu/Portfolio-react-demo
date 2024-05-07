import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Devekopment</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>HTML</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>CSS</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>JavaScript</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Bootstrap</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Tailwind CSS</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>ReactJS</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>SASS</h4>
                <small className='text-lights'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Material UI</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>TypeScript</h4>
                <small className='text-lights'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Devekopment</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>PHP</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Node JS</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Next JS</h4>
                <small className='text-lights'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>MongoDB</h4>
                <small className='text-lights'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>MySQL</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Django</h4>
                <small className='text-lights'>Expert</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Python</h4>
                <small className='text-lights'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>

                <h4>Flask</h4>
                <small className='text-lights'>Intermediate</small>
                </div>
              </article>
              
            </div>
        </div>
      </div>
    </section>
  
  )
}

export default experience
