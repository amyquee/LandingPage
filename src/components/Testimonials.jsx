import React from "react";
import styles, { layout } from "../style";
import { airbnb, binance, coinbase, dropbox, quotes } from "../../assets";
import { feedback } from "../constants";

const TestCard = ({quotes, content, name, title, img}) => {
  return(
    <div className="w-[350px] h-[400px] rounded-xl p-10
    font-poppins mt-8 mx-5 feedback-card">
      <img src={quotes} alt="quotes" />
      <p className={`${styles.paragraph} text-[17px] pt-9 h-[170px]`}>
        {content}
      </p>
      <div className="flex pt-10 ">
        <img src={img} className="w-[50px] h-[50px]" alt="image" />
        <div className="flex flex-col ml-4 text-white justify-center">
          <h3 className="font-semibold">{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
    )
  };
  
  function Testimonials() {
    return (
      <section className="relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`flex ${styles.flexCenter} ${layout.section}`}>
        <h2 className={`${styles.heading2}`}>
          What people are{" "}
          <br className="sm:block hidden" />
          saying about us
        </h2>
        <p className={`${styles.paragraph} w-full`}>
          Everything you need to accept card and payments <br />
          and grow you business anywhere un the planet
        </p>
      </div>

      <div className="flex justify-around flex-wrap">
        {feedback.map((feedback) => (
          <TestCard key={feedback.id} {...feedback} quotes={quotes} />
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <img src={airbnb} alt="airbnb" className="w-[240px] h-[80px] m-8"/>
        <img src={binance} alt="airbnb" className="w-[240px] h-[60px] m-8"/>
        <img src={coinbase} alt="airbnb" className="w-[240px] h-[50px] m-8"/>
        <img src={dropbox} alt="airbnb" className="w-[240px] h-[50px] m-8"/>
      </div>
    </section>
  );
}

export default Testimonials;
