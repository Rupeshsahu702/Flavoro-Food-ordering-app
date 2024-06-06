import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice';

const FoodCard = ({id,name,rating,img,price,desc,handleToast}) => {

   const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5  flex flex-col gap-3 rounded-lg'>
        <img 
        src={img} 
        alt="" 
        className='w-auto h-[130px] hover:scale-110  cursor-pointer transition-all duration-500 ease-in-out'/>
    <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
    </div>
    <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
    <div className='flex justify-between'>
        <span className='flex items-center justify-center gap-1'>
        <FaStar className='text-yellow-400' /> 4.5
        </span>
        <button onClick={()=>{
          dispatch(addToCart({id,price,rating,name ,img,qty:1}));
          handleToast(name)
        }} className='p-1 px-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>
            Add to Cart
        </button>
    </div>
    </div>
  );
};

export default FoodCard;