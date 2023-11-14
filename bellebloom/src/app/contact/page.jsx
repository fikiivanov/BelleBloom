"use client";
import React from "react";
import Header from "../components/Header/Header";
import Contact from "../components/Footer/Contact";
import Footer from "../components/Footer/Footer";
import Location from "../components/Footer/Location";
import style from "./style.scss";
import ShowEffectProvider from "../providers/ShowEffectProvider";

const page = () => {
  const framerVariant = (value) => {
    let framerVariantContact = {
      hidden: { opacity: 0, y: value },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    };
    return framerVariantContact;
  };

  return (
    <section className="contact-page-section">
      <Header />
      <div className="shell">
      <ShowEffectProvider variant={framerVariant(-50)}>
            <h2>Contact</h2>
        </ShowEffectProvider>

        <div className="section__inner">
          <ShowEffectProvider variant={framerVariant(50)}>
            <Contact mainColor={"main-color"} />
          </ShowEffectProvider>

          <ShowEffectProvider variant={framerVariant(-50)}>
            <Location />
          </ShowEffectProvider>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
