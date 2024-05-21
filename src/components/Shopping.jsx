import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Loading from './Loading';
import { motion, AnimatePresence } from 'framer-motion';

const Shopping = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSearch = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data); // Log the data
      setSearchResults(response.data); // Assuming the API returns an array of products
      setLoading(false);
    } catch (e) {
      console.error('error', e);
      setLoading(false);
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
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full h-full inset-0 flex items-center justify-center bg-white z-50"
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="search-container w-screen flex  flex-col items-center justify-center h-screen">
              <div className="  w-screen h-1/2   flex flex-col items-center justify-center gap-4  overflow-x-auto ">
                <input
                  className="w-50 h-16 p-4 rounded-md absolute top-[25%] z-[999] bg-zinc-100 "
                  type="text"
                  placeholder="Search for products..."
                  value={query}
                  onChange={handleSearchChange}
                />
                <div className="product-list flex items-center justify-center h-1/2 p-4 gap-8  ">
                  {filteredResults.map(product => (
                    <div key={product.id} className="w-40 product-item h-60 text-sm">
                      <img className="w-full h-full object-cover" src={product.image} alt={product.title} />
                      <h3>{product.title}</h3>
                      <p>{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shopping;
