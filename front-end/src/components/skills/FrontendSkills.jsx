import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'

const FrontendSkills = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Front-end Technologies</h3>
        <div className="skills__box">
        <div className="skills__group">
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' style={{fontSize: "0.5rem"}} />

                    <div>
                        <h3 className="skills__name">React JS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">Tailwind CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">Material UI</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            

            <div className="skills__group">
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">HTML/CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">Git/GitHub</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontendSkills