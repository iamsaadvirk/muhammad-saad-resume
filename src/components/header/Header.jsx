import React, { useState } from 'react'
import './header.css'
import { UilTimes, UilApps, UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilMessage } from '@iconscout/react-unicons'

const Header = () => {
    /* ============ TOGGLE MENU ==============    */
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    /* ============ TOGGLE MENU ==============    */
    const [activeNav, setActiveNav] = useState("#home");
    const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Saad Virk</a>

            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "nav__link active-link" : "nav__link"}>
                            <UilEstate className='nav__icon' /> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "nav__link active-link" : "nav__link"}>
                            <UilUser className='nav__icon' /> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? "nav__link active-link" : "nav__link"}>
                            <UilFileAlt className='nav__icon' /> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === '#qualification' ? "nav__link active-link" : "nav__link"}>
                            <UilBriefcaseAlt className='nav__icon' /> Qualification
                        </a>
                    </li>

                    {/* <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <UilScenery className='nav__icon' /> Portfolio
                        </a>
                    </li> */}
                    
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "nav__link active-link" : "nav__link"}>
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