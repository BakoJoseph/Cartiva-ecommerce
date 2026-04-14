import Logo from '../../assets/images/logoE.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown'
import SearchBox from './SearchB'
import { FaRegUser } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import Navigation from './Navigation'

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className='mb-0 mt-0 text-center'>Welcome to our store! Get 10% off your first order.</p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" className="img-fluid" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                <SearchBox />

                <div className="part3 d-flex align-items-center ms-auto">
                  <Button className='circle me-3'>
                    <FaRegUser />
                  </Button>

                  <div className="ms-auto cartTab d-flex align-items-center">
                    <span className='price'>
                      12.00
                    </span>

                    <div className="position-relative ms-3">
                      <Button className='circle'>
                        <FaOpencart />
                      </Button>
                      <span className='count d-flex align-items-center justify-content-center'>2</span>
                    </div>                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  )
}

export default Header
