import React from 'react'
import BackendSkills from './BackendSkills'
import FrontendSkills from './FrontendSkills'
import './skills.css'

const Skills = () => {
  return (
    <section className="section skill" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Expertise</span>

        <div className="skills__container container grid">
            <FrontendSkills />
            <BackendSkills />
        </div>
    </section>
  )
}

export default Skills