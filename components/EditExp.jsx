"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const EditUser = ({ id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (id) {
      getUserById();
    }
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://sas-api.vercel.app/exps/${id}`, {
        title,
        description,
        year,
      });
      router.push("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const getUserById = async () => {
    try {
      const response = await axios.get(`https://sas-api.vercel.app/exps/${id}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setYear(response.data.year);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="mt-5">
      <div className=" w-[100%] lg:w-[70%] mx-auto">
        <form
          onSubmit={updateUser}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
             rows="5"
              type="text"
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Year
            </label>
            <input
              type="text"
              id="year"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
