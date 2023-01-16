import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './blog.css';
import SinglePost from './SinglePost';

const BlogDetail = () => {

  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if(id){
      const fetchData = async () => {
        try{
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
          setBlog(res.data);
        }
        catch(err){
          console.log(err)
        }
      }
      fetchData();
    }
  }, [id]);

  const createBlog = () => {
    return {__html: blog.content};
  };

  const capitalizeFirstLetter = (word) => {
    if(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return '';
  };

  return (
    <section>
      <div className="blog__container container">
          <SinglePost blog={blog} capitalizeFirstLetter={capitalizeFirstLetter} createBlog={createBlog} />
      </div>
    </section>
  )
}

export default BlogDetail;
