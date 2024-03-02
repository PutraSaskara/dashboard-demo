"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const LinkExps = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://sas-api.vercel.app/exps");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://sas-api.vercel.app/exps/${id}`);
      getUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  console.log('data exps', users)

  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-2xl mx-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user.title}</td>
                <td className="border px-4 py-2">{user.description}</td>
                <td className="border px-4 py-2">{user.year}</td>
                <td className="border px-4 py-2">
                  <Link href={`/exps/${user.id}`} className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinkExps;
