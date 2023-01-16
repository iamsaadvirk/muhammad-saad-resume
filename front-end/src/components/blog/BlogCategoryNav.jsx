import React from 'react'
import { Link } from 'react-router-dom';

const BlogCategoryNav = () => {
  return (
    <nav className="nav__container">
        <Link to="/category/reactjs">React JS</Link>
        <Link to="/category/tailwindcss">Tailwind CSS</Link>
        <Link to="/category/python">Python</Link>
        <Link to="/category/django">Django</Link>
    </nav>
  )
}

export default BlogCategoryNav