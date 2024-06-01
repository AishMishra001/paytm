function Appbar({user , userImage}) {
  return (
    <div className='flex py-4 px-8 justify-between shadow items-center'>
          <div className='text-black font-extrabold text-3xl'>Payments App</div>
          <div className='flex gap-4 items-center'>
           <div className="text-black text-xl font-bold">Hello, {user}</div> 
           <button className="bg-gray-300 rounded-full py-2 px-4">{userImage}</button>
            </div>
    </div>
  )
}

export default Appbar