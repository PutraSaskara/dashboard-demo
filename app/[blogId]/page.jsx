import React from 'react'
import EditBlog from '../../components/EditBlog'

function page(blogId) {
    console.log('blogId data', blogId)
    let params = blogId.params.blogId
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
        <EditBlog blogId={params}/>
    </div>
  )
}

export default page