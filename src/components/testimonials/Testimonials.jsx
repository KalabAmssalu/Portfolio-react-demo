import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/avatar1.jpg'
import AVTR2 from '../../asset/avatar2.jpg'
import AVTR3 from '../../asset/avatar3.jpg'
import AVTR4 from '../../asset/avatar4.jpg'

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar: AVTR1,
    name: 'Tina Ama',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatum deserunt consequuntur voluptatibus! Vel adipisci quod inventore delectus deleniti, sunt earum magnam ullam quisquam culpa commodi velit eos officia dolorum illo natus maiores voluptatum quas rerum suscipit ex veniam! Eius tempore aperiam optio laborum sint iste aliquid, nihil quas reiciendis accusantium facilis, quaerat illo! Ad praesentium minus ut aliquid enim facere doloribus dolores? Est, ut'
  },
  {
    avatar: AVTR2,
    name: 'Jhon Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatum deserunt consequuntur voluptatibus! Vel adipisci quod inventore delectus deleniti, sunt earum magnam ullam quisquam culpa commodi velit eos officia dolorum illo natus maiores voluptatum quas rerum suscipit ex veniam! Eius tempore aperiam optio laborum sint iste aliquid, nihil quas reiciendis accusantium facilis, quaerat illo! Ad praesentium minus ut aliquid enim facere doloribus dolores? Est, ut'
  },
  {
    avatar: AVTR3,
    name: 'Tir wole',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatum deserunt consequuntur voluptatibus! Vel adipisci quod inventore delectus deleniti, sunt earum magnam ullam quisquam culpa commodi velit eos officia dolorum illo natus maiores voluptatum quas rerum suscipit ex veniam! Eius tempore aperiam optio laborum sint iste aliquid, nihil quas reiciendis accusantium facilis, quaerat illo! Ad praesentium minus ut aliquid enim facere doloribus dolores? Est, ut'
  },
  {
    avatar: AVTR4,
    name: 'elon Nana',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatum deserunt consequuntur voluptatibus! Vel adipisci quod inventore delectus deleniti, sunt earum magnam ullam quisquam culpa commodi velit eos officia dolorum illo natus maiores voluptatum quas rerum suscipit ex veniam! Eius tempore aperiam optio laborum sint iste aliquid, nihil quas reiciendis accusantium facilis, quaerat illo! Ad praesentium minus ut aliquid enim facere doloribus dolores? Est, ut'
  }

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt='testimonial' />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review} </small>
            </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
