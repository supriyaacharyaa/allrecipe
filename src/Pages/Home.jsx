import React, { useEffect, useState } from 'react'


import { Link } from 'react-router-dom';


function Home() {

  let [food,setFood]= useState([]);


useEffect(() => {
  fetch(`https://dummyjson.com/recipes`)
    .then((a) => a.json())
    .then((b) => {
      setFood(b.recipes);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);


// useEffect(() => {
//   console.log("food:", myFoodood);
// }, [food]);



//   console.log("food:", food)
  return (
    <>
      <div className="container">
        <div className="row ">
            <div className="col-lg-8 ">
<div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img  src="https://content.jdmagicbox.com/comp/def_content/fast-food/22-fast-food-9-20wsq.jpg" className ="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.squarespace-cdn.com/content/v1/55d729cfe4b00ab3960e7989/1469961270168-7BAAAGCW7A6VOZA5QR0A/image-asset.jpeg?format=500w" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.washingtonpost.com/rf/image_908w/2010-2019/WashingtonPost/2015/03/03/Foreign/Images/iStock_000018231648_Large1425426370.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>

</div>


            </div>
            <div className="col-lg-4">
               <div className='p-3'>
                <div className="row orange py-2">
                    <div className="col-lg-12">
                        <h5 className='text-center'>News & Trending</h5>
                    </div>
                <div className="row ">
                    <div className="col-lg-5 p-3"><img src="https://www.allrecipes.com/thmb/l520iSDKmJf2eJZRQXGXTdn2BYo=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-recipe-222118-healthier-sugar-cookie-icing-VAT-02-4x3-57b6014befad462d9537d1ce00750b73.jpg" alt="" /></div>
                    <div className="col-lg-7 p-3"><h6>
                    I Tried Our 5 Most Popular Sugar Cookies—This Is the One I Bookmarked</h6></div>
                    <div className="col-lg-5 p-3"><img src="https://www.allrecipes.com/thmb/kOnGoeFuer_1xxRuqPI8I1ZtL88=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8562-chicken-noodle-soup-DDMFS-4x3-1403-cf0fe02df0fd402a96838cedf7e59d4c.jpg" alt="" /></div>
                    <div className="col-lg-7 p-3"><h6>
                    This Chicken Noodle Soup Shortcut Is So Simple, Yet So Genius</h6></div>
                    <div className="col-lg-5 p-3"><img src="https://www.allrecipes.com/thmb/NYmZWifdBuxxCp8jQJ2NZu-WaCU=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ar-friend2-ingredientapp-GettyImages-1440796593-4x3-f5e88ba639184bc99577c9ae38be0a3f.jpg" alt="" /></div>
                    <div className="col-lg-7 p-3"><h6>
                    The 2-Ingredient Appetizer I Beg My Friend to Bring to Parties</h6></div>
                    <div className="col-lg-5 p-3"><img src="https://www.allrecipes.com/thmb/FzRANKLA8UhXE1ZIwNNZP9tiFgU=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gifts-for-kids-who-love-to-cook-update-tout-cb46088c477d423b8def97ff20f0f7ad.jpg" alt="" /></div>
                    <div className="col-lg-7 p-3"><h6>
                    50 Gifts for Kids Who Love to Cook</h6></div>
                </div>
                </div>
               </div>
            </div>
        </div>

<section className='py-3'>
  <h3>Explore Foods</h3>
  <div className="row">
  {food.map((a)=>(
    <div className="col-lg-4">
   
     <div className="shadow p-3">
<img className='w-100' key={a.id} src={a.image} alt="" />
<p className='fw-bold'>{a.name}</p>
<Link to={`/detail/${a.id}`} className='fw-bold btn btn-outline-danger '> View Recipe</Link>
</div>
   </div>
        ))}

   

  </div>
</section>
        
      </div>

    </>
  )
}

export default Home
