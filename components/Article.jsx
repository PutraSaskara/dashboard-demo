import Image from 'next/image';
import React from 'react'

function Article({title, imageUrl, content, source, author}) {
  return (
    <div className="mt-[50px] ">
      <div className="relative">
        <div>
            <h1 className="mx-0 text-[16px] lg:text-[24px] font-bold text-center text-white">
            {title}
            </h1>
        </div>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-center mt-5">
            <Image
              src={imageUrl}
              width={300}
              height={300}
              alt={title}
              className='h-[300px]'
            />
          </div>

          <div className="mt-10 text-white">
            <p>{content}</p>
          </div>
          <h1 className="mt-10 font-semibold text-white">source: {source}</h1>
          <h1 className="font-semibold text-white">author: {author}</h1>
        </div>
      </div>
      {/* <h1>Detail id Article {params.title}</h1> */}
    </div>
  )
}

export default Article