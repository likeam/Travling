import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
    img,
    title,
    location,
    description,
    price,
    type,
    handleOrderPopup,
  }) => {
  return (
   <>
     <div
        className="transition-all duration-500 shadow-lg cursor-pointer hover:shadow-xl dark:bg-slate-950 dark:text-white"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="p-3 space-y-2">
          <h1 className="text-xl font-bold line-clamp-1">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Rs-{price}</p>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default PlaceCard