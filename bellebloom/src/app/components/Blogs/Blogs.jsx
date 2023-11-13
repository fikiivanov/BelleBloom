'use client'
import React from "react";
import style from "./style.scss";
import Image from "next/image";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";

const Blogs = () => {
  const framerVariant= {
    hidden: { x: -300, opacity: 0 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        stiffness: 100,
        duration: 1,
      },
    },
  };
  return (
    <section className="section-blogs">
      <div className="shell">
        <div className="section__inner">
          <h2>Blogs</h2>

          <ShowEffectProvider variant={framerVariant}>
            <ul className="blogs">
              <li className="blog">
                <Image
                  width={400}
                  height={400}
                  src="/images/Blogs/acne.png"
                  alt=""
                />

                <div className="card__text">
                  <h3>Acne</h3>

                  <a href="">More</a>
                </div>
              </li>

              <li className="blog">
                <Image
                  width={400}
                  height={400}
                  src="/images/Blogs/freckles.png"
                  alt=""
                />

                <div className="card__text">
                  <h3>Freckles</h3>

                  <a href="">More</a>
                </div>
              </li>

              <li className="blog">
                <Image
                  width={400}
                  height={400}
                  src="/images/Blogs/clay-mask.png"
                  alt=""
                />

                <div className="card__text">
                  <h3>Clay mask</h3>

                  <a href="">More</a>
                </div>
              </li>
            </ul>
          </ShowEffectProvider>
          <a href="" className="btn btn--reverse ">
            <span>More </span>
          </a>
        </div>

        <hr className="line" />
      </div>
    </section>
  );
};

export default Blogs;
