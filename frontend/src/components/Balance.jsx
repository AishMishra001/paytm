import React from 'react'
import { FaRupeeSign } from "react-icons/fa";

function Balance({Balance}) {
  return (
    <div className=' font-extrabold text-2xl py-6 px-8 flex items-center gap-2 text-green-500'>
     <div className='text-black'>Your Balance :</div>
       <FaRupeeSign className='text-green-500'/> {Balance}</div>
  )
}

export default Balance