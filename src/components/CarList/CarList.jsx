import React from "react";
import whiteCar from "../../assets/white-car.png";
import kiaCar from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import { data } from "autoprefixer";
const cars = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
    link: "#",
  },
  {
    name: "KIA UX",
    price: 140,
    image: kiaCar,
    aosDelay: "500",
    link: "#",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car6,
    aosDelay: "1000",
    link: "#",
  },
];
const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white ">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem ipsum dolor.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {cars.map((car, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                key={index}
              >
                <div className="w-full h-[120px]">
                  <img
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                    src={car.image}
                    alt={car.name}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold ">{car.name}</h1>
                  <div className="flex  justify-between items-center text-xl font-semibold">
                    <p>${car.price}/Day</p>
                    <a href={car.link} >Détails</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid place-content-center mt-8">
          <button
            data-aos="fade-up"
            className="btn rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-500 py-2 px-6 text-primary tracking-wider"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
