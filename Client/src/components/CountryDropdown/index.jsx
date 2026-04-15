import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const CountryDropdown = () => {
    return (
        <>
            <Button className='countryDropdown'>
                <div className="info d-flex flex-column">
                    <span className='label'>
                        Your Location
                    </span>
                    <span className='name'>
                        USA
                    </span>
                </div>

                <span className='ms-auto'>
                    <FaAngleDown />
                </span>
            </Button>

            <Dialog open={true} className='locationModal' >
                <h4 className='mb-0'>
                    Choose Your delivery Location
                </h4>
                <p>
                    Enter your address and we will specify the offer for your area.
                </p>
                <div className='headerSearch w-100'>
                    <input
                        type='text'
                        placeholder='Search for products...'
                    />
                    <Button><FiSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    <li>
                        <Button>
                            USA
                        </Button>
                    </li>


                </ul>
            </Dialog>
        </>

    )
}

export default CountryDropdown

