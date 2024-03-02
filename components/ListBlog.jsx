"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function ListBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://sas-api.vercel.app/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (blogId) => {
    // Show a confirmation dialog before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this blog post?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`https://sas-api.vercel.app/blogs/${blogId}`);
        // After successful deletion, update the list of blogs by refetching them
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  return (
    <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-y-2 justify-items-center">
      {blogs?.map((blog) => (
        <Card
          key={blog.id}
          title={blog.title}
          author={blog.author}
          img={blog.imageUrl}
          desc={blog.description}
          link={`/${blog.id}`}
          link2={`/article/${blog.id}`}
          onDelete={() => handleDelete(blog.id)} // Pass the delete function as a prop
        />
      ))}
    </div>
  );
}

export default ListBlog;
