import React from 'react'
import locationMar from '../../../../public/image/location.png'

const BeMarchent = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat p-5 text-white rounded-4xl bg-[#03373D]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={locationMar}
    />
    <div>
      <h1 className="text-3xl font-bold">Marchent & Customer Satisfaction is our First Priority</h1>
      <p className="py-6">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>
      <div className="flex gap-4">
        <button className='p-2 rounded-3xl border-2 border-e-sky-200 font-extrabold hover:bg-blue-200 hover:text-black'> Become a Marchent</button>
        <button className='p-2 rounded-full border-2 border-b-blue-600 font-extrabold hover:bg-blue-100 hover:text-black'>Earn Mony</button>
      </div>  
    </div>
  </div>
</div>
  )
}

export default BeMarchent
