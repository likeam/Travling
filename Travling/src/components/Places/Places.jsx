import React from 'react'
import Img1 from "../../assets/Places/boat.jpg";
import Img2 from "../../assets/Places/tajmahal.jpg";
import Img3 from "../../assets/Places/water.jpg";
import Img4 from "../../assets/Places/place4.jpg";
import Img5 from "../../assets/Places/place5.jpg";
import Img6 from "../../assets/Places/place6.jpg";
import PlaceCard from './PlaceCard';

const PlacesData = [
    {
      img: Img1,
      title: "Boat",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img2,
      title: "Taj Mahal",
      location: "India",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img3,
      title: "Underwater",
      location: "US",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6200,
      type: "Cultural Relax",
    },
    {
      img: Img4,
      title: "Sydney",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img5,
      title: "Los Angeles",
      location: "United states",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img6,
      title: "Los Vegas",
      location: "California",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6200,
      type: "Cultural Relax",
    },
  ];


const Places = ({handleOrderPopup }) => {
  return (
    <>
         <div className="py-10 dark:bg-gray-900 dark:text-white bg-gray-50">
        <section data-aos="fade-up" className="container ">
          <h1 className="py-2 pl-2 my-8 text-3xl font-bold border-l-8 border-primary/50">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Places