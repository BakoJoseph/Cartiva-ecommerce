import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
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
        </>

    )
}

export default CountryDropdown

