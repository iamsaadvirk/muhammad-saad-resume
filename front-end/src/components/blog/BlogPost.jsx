import React from 'react'
import { Link } from 'react-router-dom';

const BlogPost = ({ blogPost, capitalizeFirstLetter }) => {
  const date = new Date(blogPost.date_created);
  const formattedDate = date.toLocaleString('en-US', { 
    year: "numeric", 
    month: "short", 
    day: "numeric", 
    hour: "2-digit", 
    minute: "2-digit" 
  });
  
  console.log(blogPost.thumbnail)

  return (
    <div className='blogpost__content-card'>
      <div className='blogpost__content-text'>
        <strong>{capitalizeFirstLetter(blogPost.category)}</strong>
        <div>
          <img src={blogPost.thumbnail.includes(process.env.REACT_APP_API_URL) ? `${blogPost.thumbnail}` : `${process.env.REACT_APP_API_URL}${blogPost.thumbnail}`} alt={blogPost.title} />
        </div>
        <h4>{blogPost.title}</h4>
        <span>{formattedDate}</span>
        <p>{blogPost.excerpt}</p>
        <Link to={`/blog/${blogPost.slug}`} >Continue Reading...</Link>
      </div>
    </div>
  )
}


export default BlogPost