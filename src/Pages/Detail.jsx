import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
  let  {did} = useParams();
    let [d,setD]= useState([]);
  
  
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${did}`)
      .then((a) => a.json())
      .then((b) => {
        setD(b);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <div className="container">
     
      <div className="shadow p-3 width align-center text-center">
      
        <h2>{d.name}</h2>
<img className='w-100 ' key={d.id} src={d.image} alt="" />
<section>
    <h4>Ingredients</h4>
    <p>{d.ingredients}</p>
    <h4>Instructions</h4>
    <p>{d.instructions}</p>
    <h4>Other Detail</h4>
    <p> Preparation Time in Minutes : {d.prepTimeMinutes} <br />
    Cooking Time In Minutes : {d.cookTimeMinutes} <br />
    Serving : {d.servings} <br />
    
    Cusine : {d.cuisine} <br />
   Calorie Per Serving : {d.caloriesPerServing} <br />
   
    
    Rating : {d.rating} 
    
   </p>
</section>


</div>
      </div>
    </div>
  )
}

export default Detail
