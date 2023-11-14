"use client";
import React, { useEffect, useId, useState } from "react";
import style from "./style.scss";
import Image from "next/image";
import axios from "axios";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";
import Link from "next/link";

const Products = ({ categories, title, classname }) => {
  const [data, setData] = useState([]);

  let fetchInfo = (type) => {
    return axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`
      )
      .then((res) => setData(res.data.slice(0, 10).reverse()))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]); // or handle the error as needed
      });
  };

  const handleTypeClick = (e) => {
    e.preventDefault();
    let type = e.target.innerHTML.toLowerCase().replace(/ /g, "_");

    fetchInfo(type);
  };
  useEffect(() => {
    // Initial fetch with default type (lipstick)
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
                  {data.map((product) => (
                    <li key={product.id} props={product} className="card">
                      <Image
                        onError={(e) => {
                          e.target.onerror = null; // prevent infinite loop
                          e.target.src =
                            "https://scontent.fpdv1-1.fna.fbcdn.net/v/t1.6435-9/118086965_3083762088359603_978286998271727299_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c2f564&_nc_ohc=nY2jrGP7TJMAX887GN_&_nc_ht=scontent.fpdv1-1.fna&oh=00_AfCcSyHMFEBnwyFzKXV3xiXxH_9QPzelPA27s-tlf7bN7g&oe=657A0337"; // replace with your placeholder image
                        }}
                        priority
                        width={200}
                        height={200}
                        loader={() => product.image_link}
                        unoptimized={true}
                        src={product.image_link}
                        alt=""
                      />

                      <h3>{product.name}</h3>
                    </li>
                  ))}
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
