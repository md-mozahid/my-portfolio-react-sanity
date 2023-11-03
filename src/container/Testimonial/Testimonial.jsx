import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Testimonial.scss'
import { motion } from 'framer-motion'

const testimonialList = [
  {
    name: 'Frontend Developer',
    company: 'Google.inc',
    imgUrl: images.css,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit..',
  },
  {
    name: 'Backend Developer',
    company: 'Google.inc',
    imgUrl: images.html,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit..',
  },
]

const brandsImg = [
  {
    imgUrl: images.skype,
  },
  {
    imgUrl: images.bolt,
  },
  {
    imgUrl: images.nb,
  },
  {
    imgUrl: images.spotify,
  },
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState(testimonialList)
  const [brands, setBrands] = useState([])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      {testimonialList.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonialList[currentIndex].imgUrl}
              alt={testimonialList[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonialList[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">
                  {testimonialList[currentIndex].name}
                </h4>
                <h5 className="p-text">
                  {testimonialList[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }>
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* brand */}
      <div className="app__testimonial-brands app__flex">
        {brandsImg.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}>
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
)
