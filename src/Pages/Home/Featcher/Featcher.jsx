import React from 'react'

const trackingImg = 'https://i.ibb.co/0j6y2vY/tracking.png';
const boxImg = 'https://i.ibb.co/7Y6y2vD/box.png';

const Featcher = () => {
  return (
    <div className="bg-[#07102b] rounded-2xl py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* 1st Card */}
        <div className="flex items-center gap-15 bg-[#c7d6d6] rounded-xl">
          <div className="w-2/12 p-6">
            <img src={trackingImg} alt="Tracking" className="w-full" />
          </div>

          <div className="h-32 border-l border-dashed border-gray-500"></div>

          <div className="w-1/3">
            <h2 className="text-xl font-bold text-teal-900 mb-3">
              Live Parcel Tracking
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment’s journey and
              receive instant status updates for complete peace of mind.
            </p>
          </div>


        </div>
        {/* 2st Card */}
        <div className="flex items-center mt-3 gap-15 bg-[#c7d6d6] rounded-xl">
          <div className="w-2/12 p-6">
            <img src={trackingImg} alt="Tracking" className="w-full" />
          </div>

          <div className="h-32 border-l border-dashed border-gray-500"></div>

          <div className="w-1/3">
            <h2 className="text-xl font-bold text-teal-900 mb-3">
              Live Parcel Tracking
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment’s journey and
              receive instant status updates for complete peace of mind.
            </p>
          </div>


        </div>
        {/* 3st Card */}
        <div className="flex items-center mt-3 gap-15 bg-[#c7d6d6] rounded-xl">
          <div className="w-2/12 p-6">
            <img src={trackingImg} alt="Tracking" className="w-full" />
          </div>

          <div className="h-32 border-l border-dashed border-gray-500"></div>

          <div className="w-1/3">
            <h2 className="text-xl font-bold text-teal-900 mb-3">
              Live Parcel Tracking
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment’s journey and
              receive instant status updates for complete peace of mind.
            </p>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Featcher
