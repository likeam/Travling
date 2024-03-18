import React from 'react'
import Traveling from "../../assets/travelbox.png";

const Banner = () => {
  return (
    <>
      <div className=' min-h-[550px] bg-gray-100'>
        <div className=' min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
          <div className='container '>
            <div className='flex flex-col items-center gap-6  sm:flex-2'>
              <div data-aos= "flip-up">
                <img
                  src={Traveling}
                  alt='biryani img'
                  className=' max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover'
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner