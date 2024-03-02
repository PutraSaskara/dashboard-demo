import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function CardPorto({title, desc, domain, github, image, onDelete, link}) {
    const handleDelete = (event) => {
        event.preventDefault();
        // Call the onDelete function passed from the parent component
        onDelete();
      };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
    <div className="relative">
        <Image width={100} height={100} className="w-full" src={image} alt="Product Image"/>
        <button onClick={handleDelete} className='top-0 right-0 absolute bg-white-500'><MdDelete size={30} color='red'/></button>
    </div>
    <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{desc}</p>
        <div className="flex items-center justify-between">
        <Link href={github} target='_blank' className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        <FaGithub size={30}/>
            </Link>
            <Link href={domain} target='_blank' className="bg-blue-500 hover:bg-blue-600 text-white font-bold   py-2 px-4 rounded">
                Visit
            </Link>
            <Link href={link} className="bg-red-500 hover:bg-red-600 text-white font-bold   py-2 px-4 rounded">
                Edit
            </Link>
        </div>
    </div>
</div>
  )
}

export default CardPorto