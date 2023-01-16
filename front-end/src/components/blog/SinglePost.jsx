import React from 'react'
import { Link } from 'react-router-dom'

const SinglePost = ({ blog, capitalizeFirstLetter, createBlog }) => {
  return (
    <div className="blogpost">
        <h1>{blog.title}</h1>
        <h4>Category: <Link to={`/category/${blog.category}`}>{capitalizeFirstLetter(blog.category)}</Link> | {blog.month}-{blog.day}</h4>
        <img src={blog.thumbnail} alt={blog.title} />
        <div dangerouslySetInnerHTML={createBlog()} />
        <hr />
        <p><Link to='/blog'>Back to Blogs</Link></p>
    </div>
  )
}

export default SinglePost