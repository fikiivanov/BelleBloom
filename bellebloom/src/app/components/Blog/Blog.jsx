import React from "react";
import style from "./style.scss"
import { blogsText } from "../../../../public/blogsInfo/blogsInfo";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";

const Blog = ({ name }) => {
  let currentBlog = blogsText.find((el) => el.blogTitle.toLowerCase() == name);


  const framerVariant = {
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
    <ShowEffectProvider variant={framerVariant}>
    <section className="blog-page">
      <div className="section__inner">
        <Header/>
        <div className="shell">
          <div className="section__header">

            <div className="section__image">        
            <img src={currentBlog.imageUrl} alt="" />
            </div>

            <h2>{currentBlog.title}</h2>

            <p>{currentBlog.description}</p>
          </div>

          <div className="section__body">

            {currentBlog.children.map((child) => (
              <ShowEffectProvider variant={framerVariant}>
              <div key={child.id} id={child.sectionId} onScroll={false} className="blog">
                <h3>{child.title}</h3>

                <p>{child.description}</p>
              </div>
              </ShowEffectProvider>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </section>
    </ShowEffectProvider >
  );
};

export default Blog;
