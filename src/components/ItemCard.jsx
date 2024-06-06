import React from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeFromCart,incrementQty,decrementQty } from '../redux/Slices/CartSlice';

const ItemCard = ({ id, price, name, img, rating, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-3 shadow-md rounded-lg p-2 mb-3'>
      <FaTrashAlt onClick={() => {dispatch(removeFromCart({ id, img, name, price, qty }));
    toast(`${name} Removed!`, {
      icon: '👋',
    });
    }} className='absolute right-7 text-gray-600 cursor-pointer' />
      <img src={img} alt=""
        className='w-[50px] h-[50px]' />
      <div className='leading-5'>
        <h2 className='font-bold text-gray-800 '>{name}</h2>

        <div className='flex justify-between '>
          <span className='text-green-500 font-bold '>₹{price}</span>
          <div className='flex justify-center items-center gap-1 absolute right-7'>
            <FiMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})): (qty=1)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
            <span>{qty}</span>
            <FiPlus onClick={()=> qty >= 1 ? dispatch(incrementQty({id})): (qty=1)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ItemCard