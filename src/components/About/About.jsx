import React from "react";
import carAbout from "../../assets/car-about.png";
const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center  ">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
              src={carAbout}
              alt="A nice car"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus impedit nulla corrupti non perferendis!
              </p>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium minus sed necessitatibus eaque commodi!
              </p>
              <button
                data-aos="fade-up"
                className="btn rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-500 py-2 px-6 text-primary tracking-wider"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
