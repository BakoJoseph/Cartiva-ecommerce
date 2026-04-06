import React from 'react';
import Button from '@mui/material/Button';
import { FiSearch } from "react-icons/fi";

const searchBox = () => {
  return (
    <>
      {/* Header search */}
      <div className='headerSearch ms-3 me-3'>
        <input
          type='text'
          placeholder='Search for products...'
        />
        <Button><FiSearch /></Button>
      </div>
      {/* Header search */}
    </>
  );
};

export default searchBox;
