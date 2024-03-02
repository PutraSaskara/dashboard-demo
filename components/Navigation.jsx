"use client";

import { useState } from "react";


function Navigation({ blogs, porto, exps}) {
  // const {visimisi, siapasaya, event} = props
  const [activeItem, setActiveItem] = useState("blogs");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <ul className="flex justify-between items-center py-2 border-b-2 mb-5 lg:w-full lg:mx-auto lg:justify-start lg:gap-5 lg:px-">
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "blogs"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("blogs")}
        >
          <button>
            <p className="text-white">Blogs List</p>
          </button>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "portfolio"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("portfolio")}
        >
          <button>
            <p className="text-white">Portfolio List</p>
          </button>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "experience"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("experience")}
        >
          <button>
            <p className="text-white">Experience List</p>
          </button>
        </li>
      </ul>
      
      {activeItem === "blogs" &&  blogs}
      {activeItem === "portfolio" && porto}
      {activeItem === "experience" && exps}
    </div>
  );
}

export default Navigation;