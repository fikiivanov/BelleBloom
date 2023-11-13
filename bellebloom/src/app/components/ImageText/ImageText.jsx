'use client'
import React from "react";
import style from "./style.scss"
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";


const ImageText = () => {
    const framerVariant = {
        hidden: { opacity: 0  , scale:.8},
        show: {
          opacity: 1,
          scale:1,
          transition: {
            duration: 1,
            x: { duration:1 },
          },
        },
      };
      return (
        <ShowEffectProvider variant={framerVariant}>
        <section className="section-image-text">
            <div className="shell">
                <div className="section__inner">
                    <header className="section__head">
                        <h2>About Us</h2>
                    </header>

                    <div className="section__body">
                        <div className="section__text">
                            <h2>Start new info</h2>

                            <p>
                            When venturing into the world of cosmetics, knowledge is your
                            beauty compass. That's where our site comes in – your trusted
                            companion in the exciting realm of makeup and skincare. We're
                            here to assist you in discovering the cosmetics that perfectly
                            align with your desires.
                            </p>
                            <p>
                            At our virtual beauty hub, we don't just introduce you to
                            products; we're your beauty mentors, dedicated to familiarizing
                            you with the art and science of cosmetics. Whether you're a
                            teenager combating unique skin challenges, an adult seeking
                            tailored solutions, or an elegant elder woman embracing the
                            wisdom of age, our expertise spans all generations and skin
                            types.
                            </p>
                            <p>
                            We delve deeper, not only providing insights into these cosmetic
                            wonders but also addressing skin concerns specific to teenagers,
                            adults, and elder women. Discover the transformative power of
                            our face skin cosmetics, the enchantment of hair cosmetics, and
                            the allure of makeup essentials – all meticulously curated to
                            elevate your beauty experience.
                            </p>

                        </div>

                        <div className="section__image">
                                <img src="/images/about-image.png" alt="" />
                        </div>
                    </div>

                    <a href="" className="btn btn--reverse ">
                        <span>More </span>
                    </a>
                </div>

                <hr className='line'/>
            </div>
        </section>
    </ShowEffectProvider>

  );
};

export default ImageText;
