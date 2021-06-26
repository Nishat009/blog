import React, { useEffect, useState } from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <section className="class-container mt-5 background-blogs">
        <div className="text-center">
            {/* <h2 style={{color: 'orange'}} className="border-bottom container fw-bolder "></h2> */}
        </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-2 pt-5 ">
                {
                     blogs.map(blog => <BlogDetails key={blog._id}  blog={blog}></BlogDetails>)
                }
             </div>
        </div>
    </section>
    );
};

export default Blogs;