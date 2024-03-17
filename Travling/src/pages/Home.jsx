import React, { useState } from 'react'
import NatureVid from "../assets/video/main.mp4"
import Hero from '../components/Hero/Hero'
import BlogsComp from '../components/Blogs/BlogsComp';

import BannerImg from '../assets/cover-women.jpg';
import BannerPic from '../components/BannerPic/BannerPic';



const Home = () => {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className=' h-[700px] relative'>
          <video
            autoPlay
            loop
            muted
            className=' absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
          >
            <source src={NatureVid} type='video/mp4' />
          </video>
          <Hero />
        </div>
     
       <BannerPic img={BannerImg} />
        <BlogsComp />
      </div>
    </>
  )
}

export default Home