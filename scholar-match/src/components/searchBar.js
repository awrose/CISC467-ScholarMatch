import React, {useState} from 'react';

//will use this to search through scholarships
const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
   
   const handleChange = (e) => {
     e.preventDefault();
     setSearchInput(e.target.value);
   };
   
   return <div>
   
   <input
      type="search"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
   
   </div>
   
   
   };

export default SearchBar;