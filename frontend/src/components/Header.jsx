import React from 'react'

function Header({label}) {
  return (
    <div className='font-bold px-4 text-5xl text-black tracking-tighter flex justify-center'>
      {label}
    </div>
  )
}

export default Header