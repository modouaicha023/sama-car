import React from "react";
import client from "../../assets/me.jpg";
const feedbacks = [
  {
    name: "Fallou Diop",
    description: "d,fjej fjfrs  dfkkdfn dfhdfd dfndhf ifeij",
    image: client,
    aosDelay: 0
  },
  {
    name: "Fatou diallo",
    description: "d,fjej fjfrs  dfkkdfn dfhdfd dfndhf ifeij",
    image: client,
    aosDelay: 500
  },
  {
    name: "Waly Seck",
    description: "d,fjej fjfrs  dfkkdfn dfhdfd dfndhf ifeij",
    image: client,
    aosDelay: 1000

  },
];
const ClientFeedback = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        <div className=" space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil
            optio aliquam similique quibusdam suscipit impedit, porro facere
            perferendis unde reprehenderit dolor veritatis quo mollitia, quod
            rem facilis? Ad, quia?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {feedbacks.map((feedback, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={feedback.aosDelay}
              className=" card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
              key={index}
            >
              <div className=" grid place-items-center">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p> {feedback.description} </p>
              <p className="font-semibold text-center"> {feedback.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
