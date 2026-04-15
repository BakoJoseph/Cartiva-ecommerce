import React from 'react';
import Button from '@mui/material/Button';
import { FiSearch } from "react-icons/fi";

const searchBox = () => {
  return (
    <>
      {/* Header search */}
      <div className='headerSearch me-3 ms-3'>
        <input
          type='text'
          placeholder='Search your area...'
        />
        <Button><FiSearch /></Button>
      </div>
      {/* Header search */}
    </>
  );
};

export default searchBox;
