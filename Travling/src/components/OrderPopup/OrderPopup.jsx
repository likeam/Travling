import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({orderPopup, setOrderPopup}) => {
  return (
    <>
         {orderPopup && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-2 py-1 mb-4 border border-gray-300 rounded-full dark:border-gray-500 dark:bg-gray-800"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full px-2 py-1 mb-4 border border-gray-300 rounded-full dark:border-gray-500 dark:bg-gray-800"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-2 py-1 mb-4 border border-gray-300 rounded-full dark:border-gray-500 dark:bg-gray-800"
              />
              <div className="flex justify-center">
                <button 
                     onClick={() => setOrderPopup(false)}
                    className="px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderPopup