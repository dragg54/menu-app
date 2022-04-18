import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const RandomMeal = ({ randomMealData }) => {
  const randomMealImg = randomMealData.map((randomMeal) => {
    return randomMeal.strMealThumb;
  });
  console.log(randomMealData);
  return (
    <>
      <div className="random-mealImage-container">
        <div className="randomMeal-container">
          <img
             src={randomMealImg}
            alt="meal_image"
            className="random_meal_image"
          />
          </div>

          <button onClick={() => console.log('hello')}><FaHeart className="heart-btn" /></button>
        
      </div>
    </>
  );
};

export default RandomMeal;
