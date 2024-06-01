import React from 'react'
import { Link } from 'react-router-dom'

function WarningBottom({label,buttonText,to}) {
  return (
    <div className='flex px-2 justify-center'>
          <p className='px-2 text-gray-800'>{label}</p>
          <Link className="cursor-pointer text-gray-800 hover:text-black hover:font-semibold" to={to}>{buttonText}</Link>
    </div>
  )
}

export default WarningBottom