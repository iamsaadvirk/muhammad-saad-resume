import React, { useEffect, useState } from 'react'
import './header.css'
import { UilTimes, UilApps } from '@iconscout/react-unicons'
import { Link, useLocation } from 'react-router-dom'
import { menuItems } from '../../utils/NavDB'

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

    /* ============ Page Location ============ */
    const [path, setPath] = useState("/");
    let location = useLocation();
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    console.log(path);
  return (
    <header className="header">
        <nav className="nav container">
            <Link to='/' className="nav__logo">Saad Virk</Link>

            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    {
                        path === "/" ? 
                        menuItems.map((item) => (
                            <li className='nav__item' key={item.id}>
                                <a href={item.path} onClick={() => setActiveNav(item.path)} className={activeNav === item.path ? "nav__link active-link" : "nav__link"}>{item.icon} {item.name}</a>
                            </li>
                        )) :
                        menuItems.slice(0,1).concat(menuItems.slice(5,6)).map((item) => (
                            <li className='nav__item' key={item.id}>
                                <Link to={item.path} onClick={() => setActiveNav(item.path)} className={activeNav === item.path ? "nav__link active-link" : "nav__link"}>{item.icon} {item.name}</Link>
                            </li>
                        ))
                    }
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