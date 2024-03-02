"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPorto from "./CardPorto";

function ListPorto() {
  const [portos, setPortos] = useState([]);

  useEffect(() => {
    fetchPorto();
  }, []);

  const fetchPorto = async () => {
    try {
      const response = await axios.get(
        "https://sas-api.vercel.app/portfolio"
      );
      setPortos(response.data);
    } catch (error) {
      console.error("Error fetching portos:", error);
    }
  };

  const handleDelete = async (portoId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this porto post?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(
          `https://sas-api.vercel.app/portfolio/${portoId}`
        );
        fetchPorto();
      } catch (error) {
        console.error("Error deleting porto:", error);
      }
    }
  };

  console.log('ini data portos', portos)
  return (
    <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-y-2 justify-items-center">
      {portos?.map((porto) => (
        <CardPorto
          key={porto.id}
          title={porto.title}
          desc={porto.description}
          domain={porto.domain}
          github={porto.github}
          image={porto.imageUrl}
          onDelete={() => handleDelete(porto.id)} // Pass the delete function as a prop
          link={`/porto/${porto.id}`}
        />
      ))}
    </div>
  );
}

export default ListPorto;
