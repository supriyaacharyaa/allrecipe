import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
 function Header(){
    return(
<div className="container">
    <div className="row align-items-center">
        <div className="col-lg-4">
<Link><img className="w-50" src="https://seekvectorlogo.com/wp-content/uploads/2021/12/allrecipes-vector-logo-2021.png" alt="" /></Link>
        </div>
        <div className="col-lg-6">
<nav className="navbar">
  <div className="container">
    <form className="d-flex" role="search">
      <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form>
  </div>
</nav>

        </div>
        <div className="col-lg-2 d-flex ">
 
    <button className="t text-danger hover  rounded mx-3 btn btn-outline-danger" type='submit'> <h6>Login</h6></button>
    <button className="t text-danger hover rounded btn btn-outline-danger"><h6>Register</h6></button>
  
  </div>
    </div>
    <div className="row">
        <ul className="d-flex gap-5 text-danger text-center">
          <li><Link to="/">Home</Link></li>
      <li><a href="">Dinners</a></li>
       <li><a href="">Meals</a></li>
        <li><a href="">Ingredients</a></li>
        <li><a href="">Occasions</a></li>
        <li><a href="">Cuisines</a></li>
       <li><a href="">Kitchen Tips</a></li>
       <li><a href="">News</a></li>
       <li><a href="">Features</a></li>
        <li><a href="">About Us</a></li>
        </ul>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
       <Route path='/detail/:did' element={<Detail/>}/>
       

      </Routes>
</div>
      
    )
    }
export default Header;