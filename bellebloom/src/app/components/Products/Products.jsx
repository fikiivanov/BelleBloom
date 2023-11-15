"use client";
import React, { useEffect, useId, useState } from "react";
import style from "./style.scss";
import axios from "axios";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";
import Link from "next/link";
import Card from "../Card/Card";

const Products = ({ categories, title, classname }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let fetchInfo = async (type) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`
      );
      setData(response.data.slice(0, 10).reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTypeClick = (e) => {
    e.preventDefault();
    let type = e.target.innerHTML.toLowerCase().replace(/ /g, "_");

    fetchInfo(type);
  };

  useEffect(() => {
    fetchInfo("bronzer");
  }, []);

  let classNameNav = `section__nav-categories ${classname}`;

  const framerVariantRight = {
    hidden: { x: -200, opacity: 0 },
    show: {
      opacity: 1,
      x: 1,
      transition: {
        duration: 1,
        x: { duration: 1 },
      },
    },
  };

  const framerVariantLeft = {
    hidden: { x: 100, opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      x: 1,
      scale: 1,

      transition: {
        type: "tween",
        stiffness: 100,
        duration: 1,
      },
    },
  };

  return (
    <section className="section-products">
      <div className="shell">
        <div className="section__inner">
          <ShowEffectProvider variant={framerVariantLeft}>
            <header className="section__head">
              <h2>{title}</h2>

              <nav className={classNameNav}>
                <ul>
                  {categories.map((category) => (
                    <li onClick={handleTypeClick} key={useId()}>
                      <a href="">{category}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>
          </ShowEffectProvider>

          <ShowEffectProvider variant={framerVariantRight}>
            <div className="section__body">
              <div className="cards">
                <ul>
                  {loading ? (
                    <div className="loader"></div>
                  ) : (
                    data.map((product) => (
                      <Card product={product} key={product.id} setLoading={setLoading} />
                    ))
                  )}
                </ul>
              </div>
            </div>
            {title == "Cosmetics Info" && (
              <Link href="./products" className="btn btn--reverse ">
                <span>More </span>
              </Link>
            )}
          </ShowEffectProvider>
        </div>

        <hr className="line" />
      </div>
    </section>
  );
};

export default Products;
