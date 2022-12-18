import React, { useState } from 'react'
import './qualification.css'
import { UilGraduationCap, UilBriefcaseAlt, UilCalendarAlt  } from '@iconscout/react-unicons'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Education Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                >
                    <UilGraduationCap className='qualification__icon' /> Education
                </div>

                <div 
                    className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                >
                    <UilBriefcaseAlt className='qualification__icon' /> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master of Philosophy in Computer Sceince (MPhil CS)</h3>
                            <span className="qualification__subtitle">Punjab University College of Information Technology (PUCIT) | 3.23 - Thesis in Progress</span>
                            <div className="qualification__calender">
                                <UilCalendarAlt /> Dec 2020 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bachelors of Science in Computer Science (BSCS)</h3>
                            <span className="qualification__subtitle">Lahore Leads University | CGPA: 3.52</span>
                            <div className="qualification__calender">
                                <UilCalendarAlt /> Nov 2014 - Jul 2018
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Front-end Web Developer Intern (Remote)</h3>
                            <span className="qualification__subtitle">Singapore - Right-Hand Cybersecurity</span>
                            <div className="qualification__calender">
                                <UilCalendarAlt /> Oct 2022 - Dec 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineer Intern (Remote)</h3>
                            <span className="qualification__subtitle">Australia - Horizon Digital (Pakistan)</span>
                            <div className="qualification__calender">
                                <UilCalendarAlt /> Aug 2022 - Oct 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer Intern</h3>
                            <span className="qualification__subtitle">Pakistan - Filmbaily</span>
                            <div className="qualification__calender">
                                <UilCalendarAlt /> June 2018 - Aug 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Front-end Intern</h3>
                            <span className="qualification__subtitle">Pakistan - BasePlan.pk</span>
                            <div className="qualification__calender">
                                <UilCalendarAlt /> Apr 2018 - Jun 2018
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification