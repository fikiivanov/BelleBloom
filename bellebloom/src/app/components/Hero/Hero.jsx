import React from "react";
import style from "./style.scss"

const Hero = () => {
  return (
    <section className="hero">
        <img src="/images/Background-image.png" alt="" />
        
        <div className="shell">
            <div className="hero__inner">
                <div className="hero__content">
                    <h1>About Cosmetics</h1>

                    <p>Learn more about other cosmetics with BELLEBLOOM</p>

                    <a href="" className="btn">
                        <span>More Information </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
