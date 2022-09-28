import React from 'react'
import { UilAwardAlt, UilBriefcaseAlt, UilCommentQuestion } from '@iconscout/react-unicons'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <UilAwardAlt className='about__icon' />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">6 months</span>
        </div>

        <div className="about__box">
            <UilBriefcaseAlt className='about__icon' /> 
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ Projects</span>
        </div>

        <div className="about__box">
            <UilCommentQuestion className='about__icon' />
            <h3 className="about__title">Service</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info