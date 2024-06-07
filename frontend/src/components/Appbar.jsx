import React from 'react';
import { GiWallet } from "react-icons/gi";

function Appbar({ user, userImage }) {
  const displayUser = user || 'User';

  return (
    <div className='flex py-4 px-8 justify-between shadow items-center'>
      <div className='text-black font-extrabold text-3xl flex gap-2'><GiWallet />EasyPay</div>
      <div className='flex gap-4 items-center'>
        <div className='text-black text-xl font-bold'>Hello, {displayUser}</div>
        <button className='bg-gray-300 rounded-full py-2 px-4'>{displayUser[0]?.toUpperCase()}</button>
      </div>
    </div>
  );
}

export default Appbar;
