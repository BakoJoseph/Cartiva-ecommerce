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
          <div className="col-sm-3 navPart1">
            <Button className='allCatTab align-items-center'>
              <span className='icon1 me-2'>
                <IoIosMenu />
              </span>
              <span className='text '>CATEGORIES</span>
              <span className='icon2 ms-4'>
                <FaAngleDown />
              </span>
            </Button>
          </div>

          <div className="col-sm-9 navPart2">
            <ul className='list-inline-item'>
              <li>
                <Link to='/'>Home</Link>  
              </li>

              <li>
                <Link to='/'>Shop</Link>  
              </li>

              <li>
                <Link to='/'>Meats & SeaFood</Link>  
              </li>

              <li>
                <Link to='/'>Bakery</Link>  
              </li>

              <li>
                <Link to='/'>Beverages</Link>  
              </li>

              <li>
                <Link to='/'>Blog</Link>  
              </li>

              <li>
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

