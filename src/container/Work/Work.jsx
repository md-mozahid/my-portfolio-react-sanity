import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import './Work.scss'

const worksType = [
  {
    title: ' Web Development',
    description: 'I am a good web Developer',
    projectLink: '',
    sourceCode: '',
    tags: ['React', 'all'],
    imgUrl: images.about01,
  },
  {
    title: ' Web Development',
    description: 'I am a good web Developer',
    projectLink: '',
    sourceCode: '',
    tags: ['Next', 'all'],
    imgUrl: images.about02,
  },
  {
    title: ' Web Development',
    description: 'I am a good web Developer',
    projectLink: '',
    sourceCode: '',
    tags: ['Web App', 'all'],
    imgUrl: images.about03,
  },
  {
    title: ' Web Development',
    description: 'I am a good web Developer',
    projectLink: '',
    sourceCode: '',
    tags: ['Mobile App', 'all'],
    imgUrl: images.about04,
  },
]

const Work = () => {
  const [works, setWorks] = useState(worksType)
  const [filterWork, setFilterWork] = useState(worksType)
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {['React', 'Web App', 'Mobile App', 'Next', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}>
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex">
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex">
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'app__works')
