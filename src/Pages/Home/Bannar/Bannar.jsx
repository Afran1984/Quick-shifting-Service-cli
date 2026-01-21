import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Bannar = () => {
  return (
    <Carousel
  autoPlay={true}
  infiniteLoop
  showThumbs={false}
  showStatus={false}
>
  <div>
    <img src="https://i.ibb.co/p6bkF7Gp/banner1.png" alt="Banner 1" />
    <p className="legend">Legend 1</p>
  </div>

  <div>
    <img src="https://i.ibb.co.com/N5TZZ3G/banner2.png" alt="Banner 2" />
    <p className="legend">Legend 2</p>
  </div>

  <div>
    <img src="https://i.ibb.co.com/YTdL783L/banner3.png" alt="Banner 3" />
    <p className="legend">Legend 3</p>
  </div>
</Carousel>

  )
}

export default Bannar
