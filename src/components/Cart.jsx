import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart)
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)
  const navigate = useNavigate();

  return (
    <>
      <div className={`fixed top-0 right-0 bg-white h-full p-5 w-full lg:w-[20vw] mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3 '>

          <span className='font-bold text-xl text-gray-800'>My Orders</span>
          <IoMdClose onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-600  text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer' />
        </div>
        {
          cartItems.length > 0 ? cartItems.map((food) => {
            return <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              rating={food.rating}
              img={food.img}
              qty={food.qty} />
          }

          ) : <h2 className='text-center text-xl font-bold text-gray-800 '> Your Cart is Empty</h2>}


        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-800'>Items: { totalQty} </h3>
          <h3 className='font-semibold text-gray-800'>Total Amount: { totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2' />
          <button onClick={()=> navigate("/success")} className='bg-green-500 font-bold text-white px-3 rounded-lg py-2 w-[90vw] lg:w-[18vw] mb-5'>CheckOut</button>
        </div>

      </div>
      <FaCartArrowDown onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white p-3 shadow-md text-5xl fixed bottom-4 right-4 ${totalQty > 0 && ' animate-bounce delay-700 transition-all'}`} />
    </>
  )
}

export default Cart