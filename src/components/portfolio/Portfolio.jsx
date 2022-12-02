import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.jpg'
import IMG3 from '../../asset/portfolio3.jpg'
import IMG4 from '../../asset/portfolio4.jpg'
import IMG5 from '../../asset/portfolio5.png'
import IMG6 from '../../asset/portfolio6.jpg'

//! DO NOT USE THE IMAGES IN PRODUCTION

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visulization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visulization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visulization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visulization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visulization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visulization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  }
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
