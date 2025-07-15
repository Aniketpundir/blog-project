import React from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import { mywork } from "../../assets/assets.js";

const Article = () => {
  const { id } = useParams();

  return (
    <>
      <div className="article">
        {mywork
          .filter((items) => {
            return items._id === id;
          })
          .map((items, index) => {
            console.log(items)
            return (
              <div key={index} className="article-content">
                <h1>{items.Article_heading}</h1>
                <img src={items.img} />
                <p>{items.Article}</p>
              </div>
            );
          })}

        <h1>Written by :-- Shristi Jainer</h1>
      </div>
    </>
  );
};

export default Article;
