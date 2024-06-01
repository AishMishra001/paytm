import React from 'react'

function Button({label}) {
  return (
    <div>
     <button className='bg-black text-white w-full py-4 mt-2 font-2xl border-black rounded-lg text-xl'>{label}</button>
    </div>
  )
}

export default Button