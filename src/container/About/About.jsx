import { motion } from 'framer-motion'
import { useState } from 'react'
// import { client, urlFor } from '../../client'
import { images } from '../../constants'
import './About.scss'

const abouts = [
  { title: ' Development', description: 'I am a Developer', imgUrl: '' },
  { title: ' Development1', description: 'I am a Developer', imgUrl: '' },
  { title: ' Development2', description: 'I am a Developer', imgUrl: '' }
]

const About = () => {
  // const [abouts, setAbouts] = useState([])

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <img src={images.about01} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
