import React, { useState, useEffect} from 'react';
import RandomMeal from './RandomMeal';
import "./App.css";

function App() {
  const[mealData, setMealData] = useState([])
  const url =  'http://www.themealdb.com/api/json/v1/1/lookup.php?i='
  const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
 
  const fetchData = async () =>{
    const resp = await fetch(randomMealUrl)
    const respData = await resp.json()
    setMealData(respData.meals)
  }

  useEffect(()=>{fetchData()},[])

  return (
  <div className="meal-container">
    <div className="favoriteMeals-container">
    </div>
    <RandomMeal randomMealData={mealData}/>
  </div>
  );
}

export default App;
