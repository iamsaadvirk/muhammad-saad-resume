import React from 'react'
import { UilGithubAlt, UilFacebookF, UilLinkedinAlt } from '@iconscout/react-unicons'
const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/msaadvirk12" className="home__social-icon" rel='noreferrer' target="_blank">
            <UilGithubAlt />
        </a>

        <a href="https://www.linkedin.com/in/msaadvirk12/" className="home__social-icon" rel='noreferrer'  target="_blank">
            <UilLinkedinAlt />
        </a>

        <a href="https://www.facebook.com/msaadvirk12" className="home__social-icon" rel='noreferrer' target="_blank">
            <UilFacebookF  />
        </a>
    </div>
  )
}

export default Social