import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './blog.css';
import axios from 'axios';
import BlogCategoryNav from './BlogCategoryNav';
import FeaturedBlog from './FeaturedBlog';
import BlogPost from './BlogPost';

const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
        setFeaturedBlog(res.data[0]);
      }
      catch(err){

      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
        setBlogs(res.data);
      }
      catch(err){

      }
    }
    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return '';
  };

  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <BlogPost blogPost={blogPost} capitalizeFirstLetter={capitalizeFirstLetter} />
      )
    })

    for (let i=0; i<list.length; i += 2) {
      result.push(
        <div key={i} className='blogpost__sections'>
          <div className='blogpost__column'>
            {list[i]}
          </div>
          <div className='blogpost__column'>
            {list[i+1] ? list[i+1] : null}
          </div>
        </div>
      )
    }
    return result;

  };

  return (
    <section>
      <div className="blog__container container">
          <BlogCategoryNav />
          <FeaturedBlog featuredBlog={featuredBlog} />
          {getBlogs()}
      </div>
    </section>
  );
};

export default Blog