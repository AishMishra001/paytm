import React from 'react'

function Button({label , onClick}) {
  return (
    <div>
     <button onClick={onClick} className='bg-black text-white w-full py-4 mt-2 font-2xl border-black rounded-lg text-xl'>{label}</button>
    </div>
  )
}

export default Button