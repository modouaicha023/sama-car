import React from "react";
import pattern from "../../assets/pattern.jpeg";
import playStoreImg from "../../assets/play_store.png";
import appStoreImg from "../../assets/app_store.png";
const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const AppStoreSection = () => {
  return (
    <div className="container pb-14">
      <div
        className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto px-4">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Get Started with our app
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit mollitia voluptatem illum neque rem ipsum eum? Nihil
              dolores debitis maiores voluptatem at deleniti excepturi, ipsam
              laborum corporis nisi sint magni.
            </p>
            <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-4">
              <a href="#">
                <img
                  src={playStoreImg}
                  alt="playStoreImg"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={appStoreImg}
                  alt="appStoreImg"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreSection;
