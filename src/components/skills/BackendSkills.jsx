import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'

const BackendSkills = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Back-end Technologies</h3>
        <div className="skills__box">
        <div className="skills__group">
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">Pyton</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <UilCheckCircle className='title-badge' />

                    <div>
                        <h3 className="skills__name">Django</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackendSkills