import React, { useState } from "react";
import NatureVid from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";
import BlogsComp from "../components/Blogs/BlogsComp";

import BannerImg from "../assets/cover-women.jpg";
import BannerPic from "../components/BannerPic/BannerPic";
import Places from "../components/Places/Places";
import Banner from "../components/Banner/Banner";
import Banner2 from "../assets/travel-cover2.jpg";
import Testimonial from "../components/Testimonial/Testimonial";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className=" h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className=" absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
