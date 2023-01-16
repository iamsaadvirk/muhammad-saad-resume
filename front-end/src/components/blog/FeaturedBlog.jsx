import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedBlog = ({featuredBlog}) => {
  return (
    <div className='blog__featured-section'>
      <div className='blog__featured-content'>
        <h3>Featured Article</h3>
        <h1>{featuredBlog.title}</h1>
        <p>{featuredBlog.excerpt}</p>
        <p><Link to={`/blog/${featuredBlog.slug}`}>Continue Reading...</Link></p>
      </div>
    </div>
  )
}

export default FeaturedBlog