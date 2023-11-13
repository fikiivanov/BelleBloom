"use client";
import React from "react";
import style from "./style.scss";
import Image from "next/image";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";

const Products = () => {
  const framerVariantRight = {
    hidden: { x: -200, opacity: 0, },
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
    hidden: { x: 100, opacity: 0,scale:.5 },
    show: {
      opacity: 1,
      x: 1,
      scale:1,

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
              <h2>Cosmetics Info</h2>

              <nav className="section__nav-categories">
                <ul>
                  <li>
                    <a href="">Blush</a>
                  </li>

                  <li>
                    <a href="">Bronzer</a>
                  </li>

                  <li>
                    <a href="">Eyebrow</a>
                  </li>
                </ul>
              </nav>

              <a href="" className="">
                More<span> </span>
              </a>
            </header>
          </ShowEffectProvider>
          <ShowEffectProvider variant={framerVariantRight}>
            <div className="section__body">
              <div className="cards">
                <ul>
                  <li className="card">
                    <Image
                      width={300}
                      height={300}
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/88d74b22173b3f912b2263c4fd505a2b_ra,w158,h184_pa,w158,h184.jpg"
                      alt=""
                    />

                    <h3>Anna Sui Pencil Eyeliner WP</h3>
                  </li>

                  <li className="card">
                    <Image
                      width={300}
                      height={300}
                      priority={true}
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/baf991d5944d310d8c337423486b77ea_ra,w158,h184_pa,w158,h184.jpeg"
                      alt=""
                    />

                    <h3>Blotted Lip</h3>
                  </li>

                  <li className="card">
                    <Image
                      width={300}
                      height={300}
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/baf991d5944d310d8c337423486b77ea_ra,w158,h184_pa,w158,h184.jpeg"
                      alt=""
                    />

                    <h3>Lippie Stix</h3>
                  </li>

                  <li className="card">
                    <Image
                      width={300}
                      height={300}
                      src="https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803"
                      alt=""
                    />

                    <h3>Diorshow Iconic</h3>
                  </li>

                  <li className="card">
                    <Image
                      width={300}
                      height={300}
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/87772297ba0794c272d7e9f751d3beac_ra,w158,h184_pa,w158,h184.jpeg"
                      alt=""
                    />

                    <h3>Cargo Cosmetics BeachBlush</h3>
                  </li>

                  <li className="card">
                    <Image
                      width={300}
                      height={300}
                      src="https://d3t32hsnjxo7q6.cloudfront.net/i/baf991d5944d310d8c337423486b77ea_ra,w158,h184_pa,w158,h184.jpeg"
                      alt=""
                    />

                    <h3>
                      Pacifica Natural Minerals Solar Complete Color Mineral
                      Palette
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </ShowEffectProvider>
        </div>

        <hr className="line" />
      </div>
    </section>
  );
};

export default Products;
