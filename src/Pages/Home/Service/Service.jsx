import React, { useEffect, useState } from 'react'
import { CiDeliveryTruck } from "react-icons/ci";

const Service = () => {
    const [Services, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data));
    }, []);

    // console.log('data is :', Services);

  return (
    <div className='text-center mt-15 p-22 bg-cyan-800 rounded-2xl'>
      <h1 className='font-extrabold text-white text-3xl'>Our Services</h1>
      <p className='text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 '>
             {Services.map((service, index) => (
                <div key={index} className='card shadow-xl gap-3 p-5 bg-white hover:bg-yellow-300 transition-all duration-300 group'>
                    <div className='w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100'>
                        <CiDeliveryTruck size={40} className="text-blue-600 transition-transform duration-1000 group-hover:translate-x-80"></CiDeliveryTruck>
                    </div>
                    <h2 className='font-extrabold text-lg'>{service.title}</h2>
                    <p className='mt-4'>{service.description}</p>
                
                </div>
             ))}
            
            
            
        </div>
    </div>
  )
}

export default Service
