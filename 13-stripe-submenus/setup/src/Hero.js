import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            distinctio impedit cum voluptates nulla deserunt veniam inventore,
            accusamus consequuntur dolore commodi eos, quod deleniti architecto?
            Eius ab iste voluptatibus necessitatibus?
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
