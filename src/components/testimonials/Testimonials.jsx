import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/avatar1.png'
import AVTR2 from '../../asset/avatar2.jpeg'
import AVTR3 from '../../asset/avatar3.jpeg'
import AVTR4 from '../../asset/avatar4.png'
import AVTR5 from '../../asset/avatar5.png'

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar: AVTR1,
    name: 'Wasihun mola',
    review: "Tiver Driving School stands as a testament to the seamless integration of the MERN stack and a user-centric design approach. As a participant in its development, I've witnessed its transformative impact firsthand. With tailored features for trainers, trainees, managers, and the registration office, the platform offers intuitive tools for scheduling, progress tracking, and administrative tasks. Tiver's commitment to continuous improvement ensures a cutting-edge experience, empowering users on their journey to safe driving. It's not just a project; it's a beacon of excellence in driving education, poised to make a lasting impact in the lives of learners everywhere."
  },
  {
    avatar: AVTR2,
    name: 'Getasew Amssalu',
    review: 'As I was a coordinator in final year industrial project Kalab shows his Information management system and Enterprise Resource Planning theoretical skill with his project. I have seen his good programming skill with high professional responsibility of project management and team leading. He have a good problem solving skill and a goood talent of responsive and interactive website designing skill. I have the opportunity to see the good and admirable response from his evaluators on his defense. And he has a good communication skills and he has a good power point presentation with great english speaking quality.'
  },
  {
    avatar: AVTR3,
    name: 'Gashaw Desalegn',
    review: 'Based on my observation kalab is a man of achivement, motivation and commitment to any objectives. He is flair to learn new things. he is a hard-working person with independence and self-reliance. and also he is egger to do new and interesting project in such subject matter like "Psychotherapy chat bot" in information storage and retrieval course. I would rate kalab performace as excellent.'
  },
  {
    avatar: AVTR4,
    name: 'Asemrie Yemata',
    review: 'I found kalab Amssalu as an outstanding student who is always ready to learn new things. He is highly diligent and hard worker student. on top of this, he has a fast learning ability and good problem solving skill. At university of Gondar I was his head of department.'
  },
  {
    avatar: AVTR5,
    name: 'Workneh Alamrie',
    review: 'Up on my observation as his instructor and as his senior industrial project advisor, He has always showed a great interest and actively participated in acadamic discussion and he is energetic, well organized with good communication skill'
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
