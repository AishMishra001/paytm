import React from 'react'

function OtherUser({UserImage , User}) {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <button className='bg-gray-300 rounded-full py-2 px-4'>{UserImage}</button>
          <div className='text-black font-bold text-xl'>{User}</div>
        </div>
        <div>
          <button className='bg-black text-white w-full py-4 px-8 mt-2 border-black rounded-lg text-md font-bold'>Send Money</button>
        </div>
      </div>
  )
}

export default OtherUser  