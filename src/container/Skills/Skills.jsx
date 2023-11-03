import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Skills.scss'


const skillsType = [
  {
    name: 'React',
    bgColor: '#edf2f8',
    imgUrl: images.react,
  },
  {
    name: 'Redux',
    bgColor: '#46364a',
    imgUrl: images.redux,
  },
  {
    name: 'Typescript',
    bgColor: '#edf2f8',
    imgUrl: images.typescript,
  },
  {
    name: 'Git',
    bgColor: '#46364a',
    imgUrl: images.git,
  },
  {
    name: 'Flutter',
    bgColor: '#edf2f8',
    imgUrl: images.flutter,
  },
]

const experiences = [
  {
    name: 'Frontend Developer',
    company: 'Google.inc',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..',
    year: '2023',
  },
  {
    name: 'Backend Developer',
    company: 'Google.inc',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..',
    year: '2022',
  },
  {
    name: 'Mobile App Developer',
    company: 'Google.inc',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..',
    year: '2021',
  },
]
// console.log(skillsType.bgColor)
const Skills = () => {
  const [skills, setSkills] = useState(skillsType)

  return (
    <>
      <h2 className="head-text">Skills & Experience </h2>

      {/* skills */}
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillsType.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* experience */}
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={experience.name}
                  key={experience.name}>
                  <h4 className="bold-text">{experience.name}</h4>
                  <p className="p-text">{experience.company}</p>
                </motion.div>
                <ReactTooltip
                  id={experience.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip">
                  {experience.desc}
                </ReactTooltip>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)
