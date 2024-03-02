'use client'
import React, {useState, useEffect} from 'react'
import axios from "axios";
import Article from '../../../components/Article'

function Page(id) {
    const [blogs, setBlogs] = useState([]);


    console.log('blogId data', id)
    const params = id.params.id


    useEffect(() => {
      fetchBlogs();
    }, []);
  
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`https://sas-api.vercel.app/blogs/${params}`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    console.log('data fetchBlogs', blogs)
  return (
    <div className='lg:w-[100%] h-[100vh] mx-auto overflow-y-auto '>
        <Article
        title={blogs.title}
        imageUrl={blogs.imageUrl}
        content={blogs.content}
        source={blogs.source}
        author={blogs.author}
        />
    </div>
  )
}

export default Page