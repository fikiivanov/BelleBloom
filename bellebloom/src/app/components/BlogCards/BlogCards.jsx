"use client";
import React from "react";
import style from "./style.scss";
import Image from "next/image";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { container, framerVariantTitle, item } from "./blogCardAnimations";

const BlogCards = ({ props }) => {

    console.log(props)
    let link = `blogs/${props[0].blogTitle}`;

    return (
        <section className="section-blog-cards">
            <div className="shell">
                <div className="section__inner">
                    <ShowEffectProvider variant={framerVariantTitle}>
                        <h2>{props[0].blogTitle}</h2>
                    </ShowEffectProvider>
                    <motion.ul
                        initial="hidden"
                        whileInView="show"
                        variants={container}
                        className="blog-cards"
                    >
                        {props.map((card) => (
                            <motion.li variants={item} key={card.id} className="blog-card">
                                <Image width={400} height={400} src={card.image} alt="" />

                                <div className="card__text">
                                    <h3>{card.title}</h3>

                                    <Link
                                        href={
                                            link == "blogs/Cosmetic Info"
                                                ? `/blogs/${card.title.toLowerCase()}`
                                                : `${link.toLowerCase().replace(/\s/g, "")}#${card.title
                                                    .toLowerCase()
                                                    .replace(/\s/g, "")}`
                                        }
                                    >
                                        More
                                    </Link>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <Link
                        href={
                            props[0].blogTitle == "Face" && "Body" && "Hair" ? `blogs/${props[0].blogTitle
                                .toLowerCase()
                                .replace(/\s/g, "")}`
                                : `blogs/`}
                        className="btn btn--reverse "
                    >
                        <span>More </span>
                    </Link>
                </div>

                <hr className="line" />
            </div>
        </section>
    );
};

export default BlogCards;
