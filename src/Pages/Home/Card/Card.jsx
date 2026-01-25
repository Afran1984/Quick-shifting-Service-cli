import React from 'react'
import { FaTruck } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { AiFillProduct } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";

const Card = () => {
  return (
    <div className='m-10'>
        <h1 className='font-extrabold'>How its works</h1>
        <div className='grid grid-cols-4 m-5 gap-6'>
            <div className='card  shadow-2xl p-5'>
               <FaTruck size={50}></FaTruck>
                <h2 className='font-bold'>Booking Pick & Drop</h2>
                <p className='font-normal'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='card  shadow-2xl p-5'>
                <GiCash size={50}></GiCash>
                <h2 className='font-bold'>Cash On Delivery</h2>
                <p className='font-normal'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='card  shadow-2xl p-5'>
                <AiFillProduct size={50}></AiFillProduct>
                <h2 className='font-bold'>Delivery Hub</h2>
                <p className='font-normal'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='card  shadow-2xl p-5'>
                <TbBrandBooking size={50}></TbBrandBooking>
                <h2 className='font-bold'>Booking SME & Corporate</h2>
                <p className='font-normal'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
        
        </div>
      
    </div>
  )
}

export default Card
