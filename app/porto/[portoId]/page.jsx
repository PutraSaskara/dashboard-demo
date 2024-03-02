import React from 'react'
import EditPorto from '../../../components/EditPorto'

function page(portoId) {
  console.log('portoId data', portoId)
    let params = portoId.params.portoId
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
        <EditPorto portoId={params}/>
    </div>
  )
}

export default page