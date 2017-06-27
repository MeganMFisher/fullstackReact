import React from "react";
import { Link } from "react-router-dom";
// import { Provider } from "react-redux";
import '../CSS/NavBar.css';


function NavBar( { items } ) {
  return (
   <div>
                <div className='nav-bar-header'>
               <Link to='/'>
                    Home
               </Link>
               <Link to='/about'>
                    About
               </Link>
               <Link to='/charts'>
                    Charts
               </Link>
               </div>
            </div>
  )
}


export default NavBar;