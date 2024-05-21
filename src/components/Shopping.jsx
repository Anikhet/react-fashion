import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Shopping = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getSearch = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data); // Log the data
      setSearchResults(response.data); // Assuming the API returns an array of products
    } catch (e) {
      console.error('error', e);
    }
  };

  useEffect(() => {
    getSearch();
  }, []);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredResults = searchResults.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
  <div>
      <Navbar />

      <div className="search-container w-full flex bg-red-100 flex-col
       items-center  justify-center h-[100vh] ">
        <div className='w-auto h-1/2 bg-red-300 overflow-x-auto flex flex-col items-center justify-center gap-[1vw]'>
        <input className='w-[10vw] h-[4vw] p-[1vw] rounded-md'
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={handleSearchChange}
        />
         <div className=" product-list flex items-center  justify-center w-full h-[1/2] p-[1vw] gap-[2vw]  ">
        {filteredResults.map(product => (
          <div key={product.id} className=" w-[10vw] product-item  h-[15vw] text-sm">
            <img className='w-full h-full object-cover' src={product.image} alt={product.title} />
            {/* <h3>{product.title}</h3>
            <p>{product.price}</p> */}
          </div>
        ))}
      </div>
      </div>
      </div>
     
      </div>
  );
};

export default Shopping;
