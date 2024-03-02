'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const EditBlog = ({ blogId }) => {
  const [source, setSource] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [desc, setDesc] = useState('');
  const [keywords, setKeywords] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`https://sas-api.vercel.app/blogs/${blogId}`);
        const blogData = response.data;
        console.log('ini data blog', blogData)

        setSource(blogData.source);
        setAuthor(blogData.author);
        setTitle(blogData.title);
        setContent(blogData.content);
        setDesc(blogData.description);
        setKeywords(blogData.keywords);
        // You may need to handle image data separately
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [blogId]);


  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageFile(selectedFile); // Update the imageFile state with the selected file

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };
  

  const saveChanges = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('source', source);
    formData.append('author', author);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('description', desc);
    formData.append('keywords', keywords);
    // formData.append('imageUrl', imageFile);

      // Check if imageFile is not null before appending
  if (imageFile) {
    formData.append('imageUrl', imageFile);
  }

  try {
    // Use axios.patch to update the blog post
    await axios.patch(`https://sas-api.vercel.app/blogs/${blogId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    // Redirect to the home page after successful update
    router.push('/');
  } catch (error) {
    // Handle errors, e.g., display error messages or redirect to an error page
    console.error('Error updating blog:', error);
  }
}

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-3xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={saveChanges}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Source</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Source"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea
              name="content"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              name="description"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Keywords"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <Image
                width={250}
                height={250}
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-lg"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
