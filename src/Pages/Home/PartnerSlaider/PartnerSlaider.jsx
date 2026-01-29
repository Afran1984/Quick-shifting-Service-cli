import React from 'react'
import Marquee from 'react-fast-marquee'
import img01 from '../../../../public/brands/amazon.png'
import img02 from '../../../../public/brands/amazon_vector.png'
import img03 from '../../../../public/brands/casio.png'
import img04 from '../../../../public/brands/moonstar.png'
import img05 from '../../../../public/brands/star.png'
import img06 from '../../../../public/brands/randstad.png'
import img07 from '../../../../public/brands/start_people.png'

const marqueeImg = [ img01, img02, img03, img04, img05, img06, img07 ];

const PartnerSlaider = () => {
  return (
    <div className='max-w-6xl mx-auto text-center py-10'>
        <h1 className='font-extrabold text-3xl mb-8'>We've helped thousands of sales teams</h1>
      <Marquee speed={50} pauseOnHover={true}>
        {marqueeImg.map((img, index) => (
            <img key={index}
            src={img}
            alt = "Brand"
            className='mx-10 h-12 object-contain'/>
        ))}
      </Marquee>
    </div>
  )
}

export default PartnerSlaider
