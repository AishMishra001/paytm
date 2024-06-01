import React from 'react'
import OtherUser from './OtherUser'

function UserSection() {
  return (
    <div className='py-6 px-8'>
      <div className='text-black font-extrabold text-2xl'>Users</div>
      <input className='w-full border-gray-200 border-2 rounded-lg p-2 my-4' type="text" placeholder='Search Users..'/>
      <div className='flex flex-col'>
      <OtherUser User={'Harkirat Singh'} UserImage={"H"}></OtherUser>
      <OtherUser User={'Vikas Kumar'} UserImage={"V"}></OtherUser>
      <OtherUser User={'Anurakt Singh'} UserImage={"A"}></OtherUser>
      <OtherUser User={'Abhishek Verma'} UserImage={"A"}></OtherUser>
      </div>
    </div>
  )
}

export default UserSection