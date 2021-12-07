import React from "react";
import image from "../images/progress.png";

const Books = () => {
  return (
    <div>
      <div className="book-card ">
        <div>
        <h3>Action</h3>
        <h2>The Hunger Games</h2>
        <a href="#">Suzanne Collins</a>
        <ul className="book-action">
          <li><a href="#">Comments</a></li> <hr />
          <li><a href="#">Remove</a></li> <hr />
          <li><a href="#">Edit</a></li>
        </ul>
        </div>
        <div className="progress">
          <img src={image} width="100px" alt="" />
          <span>
          <p>89%</p>
          <p>Completed</p>
          </span>
        </div>
        <div>
          <h6>CURRENT CHAPTER</h6>
          <h4>Chapter 16</h4>
          <button>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
