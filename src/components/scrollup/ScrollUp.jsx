import React from 'react'
import './scrollup.css'
import { UilArrowUp } from '@iconscout/react-unicons'

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollup = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollup.classList.add("show-scroll")
        else scrollup.classList.remove("show-scroll")
    })
  return (
    <a href="#" className="scrollup">
        <UilArrowUp className='scrollup__icon' />
    </a>
  )
}

export default ScrollUp