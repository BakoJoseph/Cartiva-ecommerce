import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { GiSteak } from "react-icons/gi";
import { PiCoffeeLight } from "react-icons/pi";
import { GiCheeseWedge } from "react-icons/gi";

const Navigation = () => {
 
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className='allCatTab items-center'>
              <span className='icon1 me-2'>
                <IoIosMenu />
              </span>
              <span className='text '>CATEGORIES</span>
              <span className='icon2 ms-4'>
                <FaAngleDown />
              </span>
            </Button>
          </div>
 
          <div className="col-sm-10 navPart2 d-flex align-items-center ">
            <ul className='list list-inline w-100 ms-auto'>
              <li className='list-inline-item'>
                <Link to='/'>Home</Link>  
              </li>
 
              <li className='list-inline-item'>
                <Link to='/'>Shop</Link>  
              </li>
 
              <li className='list-inline-item'>
                <Link to='/'>Meats & SeaFood</Link>  
              </li>
 
              <li className='list-inline-item'>
                <Link to='/'>Bakery</Link>  
              </li>
 
              <li className='list-inline-item'>
                <Link to='/'>Beverages</Link>  
              </li>
 
              <li className='list-inline-item'>
                <Link to='/'>Blog</Link>  
              </li>
 
              <li className='list-inline-item'>
                <Link to='/'>Contact</Link>  
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
 
export default Navigation
