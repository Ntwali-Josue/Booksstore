import React from "react";
import image from "../images/progress.png";

const Book = () => {
  return (
    <div className="bookItem">
      <div className="book-card ">
        <div>
          <h3>Action</h3>
          <h2>The Hunger Games</h2>
          <a href="#">Suzanne Collins</a>
          <br />
          <br />
          <span className="book-action">
            <a href="#">Comments</a>
            <a href="#">Remove</a>
            <a href="#">Edit</a>
          </span>
        </div>
        <div className="progress">
          <img src={image} width="100px" alt="" />
          <span>
            <span>89%</span> <br />
            <span>Completed</span>
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

export default Book;
