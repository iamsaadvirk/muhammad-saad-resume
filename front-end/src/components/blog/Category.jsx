import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './blog.css';
import BlogCategoryNav from './BlogCategoryNav';
import BlogPost from './BlogPost';

const Category = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const { id } = useParams();

  useEffect(() => {
    setCurrentCategory(id);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const fetchData = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/blog/category`,
          JSON.stringify({ category: id }),
          config
        );
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const capitalizeFirstLetter = (word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return '';
  };

  const getCategoryBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <BlogPost blogPost={blogPost} capitalizeFirstLetter={capitalizeFirstLetter} />
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="blogpost__sections">
          <div className="blogpost__column">{list[i]}</div>
          <div className="blogpost__column">
            {list[i + 1] ? list[i + 1] : null}
          </div>
        </div>
      );
    }
    return result;
  };

  return (
    <section>
      <div className="blog__container container">
        <BlogCategoryNav />
        <h4>{capitalizeFirstLetter(id)} {currentCategory} Category</h4>

        {getCategoryBlogs()}
      </div>
    </section>
  );
};

export default Category;
