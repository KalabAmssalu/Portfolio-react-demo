import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.png'
import IMG3 from '../../asset/portfolio3.jpg'
import IMG4 from '../../asset/portfolio4.jpg'
import IMG5 from '../../asset/portfolio5.png'


//! DO NOT USE THE IMAGES IN PRODUCTION

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Tiver Driving School IMS Visulization',
    github: 'https://github.com/KalabAmssalu',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Gofer Ecommerce website Visulization',
    github: 'https://github.com/KalabAmssalu/Gofer-Jordan-Shoe-Ecommerce-website-',
    demo: 'youtu.be/cHIQSbSF7AA'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React native Todo Application Visulization',
    github: 'https://github.com/KalabAmssalu/Todo-Mobile-Application',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'UoG Bus Scheduling Dashboard Visulization',
    github: 'https://github.com/KalabAmssalu/UOG-Bus-scheduling-',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'UoG Student Admission Visulization',
    github: 'https://github.com/KalabAmssalu/UOG_Admission_port',
    demo: 'https://dribbble.com/shots/'
  },
 
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent work
      </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return(   
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                      </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                        {/* TODO search the relation attribute for anchor tag */} 
                        <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
                        </div>
                    </article> 
            )
          })
        }
        
       
      </div>
    </section>
    
  )
}

export default portfolio
