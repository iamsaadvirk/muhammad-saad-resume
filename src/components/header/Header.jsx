import React, { useState } from 'react'
import './header.css'
import { UilTimes, UilApps, UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilScenery, UilMessage } from '@iconscout/react-unicons'

const Header = () => {
    /* ============ TOGGLE MENU ==============    */
    const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Saad Virk</a>

            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <UilEstate className='nav__icon' /> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <UilUser className='nav__icon' /> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <UilFileAlt className='nav__icon' /> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualification" className="nav__link">
                            <UilBriefcaseAlt className='nav__icon' /> Qualification
                        </a>
                    </li>

                    {/* <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <UilScenery className='nav__icon' /> Portfolio
                        </a>
                    </li> */}
                    
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <UilMessage className='nav__icon' /> Contact
                        </a>
                    </li>
                </ul>
                <UilTimes className='nav__close' onClick={() => showMenu(!toggle)}/>
            </div>
            <div 
                className="nav__toggle"
                onClick={() => showMenu(!toggle)}
                >
                <UilApps />
            </div>
        </nav>
    </header>
  )
}

export default Header