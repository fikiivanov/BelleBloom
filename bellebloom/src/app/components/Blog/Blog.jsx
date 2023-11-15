import React from "react";
import { blogsText } from "../../../../public/blogsInfo/blogsText";

const Blog = ({ name }) => {
  let currentBlog = blogsText.find((el) => el.blogTilte == name);

  return (
    <section className="blog-page">
      <div className="section__inner">
        <div className="shell">
          <div className="section__header">
            <img src="" alt="" />

            <h2>{currentBlog.title}</h2>

            <p>{currentBlog.description}</p>
          </div>

          <div className="section__body">
            {currentBlog.children.map((child) => (
              <div className="blog">
                <h3>{child.title}</h3>

                <p>{child.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
