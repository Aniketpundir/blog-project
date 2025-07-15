import React from "react";
import "./My_work.css";
import { mywork } from "../../assets/assets";
import { useNavigate, Link } from "react-router-dom";

const My_work = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/article/${id}`);
  };
  return (
    <>
      <div id="work" className="my-work">
        <h1>My Article</h1>
        <div className="card-wrapper">
          {mywork.map((items, index) => {
            return (
              <div className="card" key={index}>
                <img src={items.img} alt="Card" className="card-image" />
                <div className="button-group">
                  <button
                    className="card-button"
                    onClick={() => handleClick(items._id)}
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default My_work;
