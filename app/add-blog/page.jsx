import React from 'react'
import AddBlog from '../../components/AddBlog'

function page() {
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
      <h1 className='text-white text-3xl font-bold text-center py-5'>Add Your Blog</h1>
        <AddBlog/>
    </div>
  )
}

export default page