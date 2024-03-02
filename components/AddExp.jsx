"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddExp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const router = useRouter();

  const saveExp = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://sas-api.vercel.app/exps", {
        title,
        description,
        year,
      });

      router.push("/");
    } catch (error) {
      console.error("Error saving experience:", error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="w-[100%] lg:w-[70%] mx-auto">
        <form onSubmit={saveExp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
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
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              rows={5}
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">Year</label>
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
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExp;
