import React, { useState } from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(5000);

  return (
    <div className="h-full bg-black/20">
      <div className="flex items-center justify-center h-full p-4 bg-primary/10">
        <div className="container flex flex-col gap-4 ">
            <div className="text-white ">
                <p data-aos="fade-up" className="text-sm ">
                OurPckages
                </p>
                <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-3xl font-bold "
                >
                Search Your Destination
                </p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="relative flex flex-col justify-between px-4 pt-6 pb-10 rounded-md md:flex-row bg-slate-200 "
            >
                <div>
                <label htmlFor="destination" className=" opacity-70">
                    Search Your Destination
                </label>
                <input
                    type="text"
                    name="destination"
                    id="destination"
                    placeholder="Dubai"
                    className="w-full p-2 my-2 bg-white rounded-full range accent-primary focus:outline-primary focus:outline outline-1"
                />
                </div>
                <div>
                <label htmlFor="destination" className=" opacity-70">
                    Date
                </label>
                <input
                    type="date"
                    name="destination"
                    id="destination"
                    placeholder="Dubai"
                    className="w-full  !placeholder-slate-400  p-2 my-2 bg-white rounded-full  range accent-primary focus:outline-primary focus:outline outline-1"
                />
                </div>
                <div>
                <label htmlFor="destination" className="block opacity-70">
                    <div className="flex items-center justify-between w-full">
                    <p>Max Price</p>
                    <p className="text-xl font-bold">Rs {priceValue}</p>
                    </div>
                </label>
                <div className="flex items-center justify-center p-2 bg-white rounded-full ">
                    <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="w-full h-2 my-2 rounded-full appearance-none forced-color-adjust-auto bg-gradient-to-r from-primary to-secondary"
                    min="150"
                    max="10000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                    />
                </div>
                </div>
                <button className="absolute px-4 py-2 text-white duration-200 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 -bottom-5 left-1/2">
                Search Now
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
