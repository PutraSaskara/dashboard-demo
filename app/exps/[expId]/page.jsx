import React from 'react'
import EditExp from '../../../components/EditExp'

function page(expId) {
    console.log('expId data', expId)
    let params = expId.params.expId
  return (
    <div className='w-full'>
      <EditExp id={params}/>
    </div>
  )
}

export default page