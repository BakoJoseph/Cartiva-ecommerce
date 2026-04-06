import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search position-relative d-flex align-items-center">
        <IoSearch className='searchIcon' />
        <input type="text" placeholder='Search...' />        
    </div>
  )
}

export default Search
