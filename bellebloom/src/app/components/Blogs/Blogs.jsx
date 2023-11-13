"use client";
import React from "react";
import style from "./style.scss";
import Image from "next/image";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";
import { motion } from "framer-motion";

const Blogs = ({ props }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const framerVariantTitle = {
    hidden: { y: -100, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  
  return (
    <section className="section-blogs">
      <div className="shell">
        <div className="section__inner">
          <ShowEffectProvider variant={framerVariantTitle}>
            <h2>{props[0].blogTitle}</h2>
          </ShowEffectProvider>
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={container}
            className="blogs"
          >
            {props.map((card) => (
              <motion.li variants={item} key={card.id} className="blog">
                <Image width={400} height={400} src={card.image} alt="" />

                <div className="card__text">
                  <h3>{card.title}</h3>

                  <a href="">More</a>
                </div>
              </motion.li>
            ))}
          </motion.ul>
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
