import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating, onClick, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index+1)} style={style}>
          {rating > index ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
