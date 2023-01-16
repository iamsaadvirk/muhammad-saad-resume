import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <h1 className="footer__title">Muhammad Saad Virk</h1>
            <ul className="footer__list">
                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="#skills" className="footer__link">Skills</a></li>
                <li><a href="#qualification" className="footer__link">Qualification</a></li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/msaadvirk12/" className="footer__social-link" rel='noreferrer'  target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/msaadvirk12" className="footer__social-link" rel='noreferrer' target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://www.facebook.com/msaadvirk12" className="footer__social-link" rel='noreferrer' target="_blank">
                    <i className='bx bxl-facebook'></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Muhammad Saad Virk. All rights reserved!
            </span>
        </div>
    </footer>
  )
}

export default Footer