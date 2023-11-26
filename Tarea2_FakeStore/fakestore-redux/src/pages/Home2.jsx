import React, { useEffect, useState } from 'react';
import { useFakestoreApi } from '../hooks/useFakestoreApi';
import ProductItem from '../components/ProductItem';
import ProductList from './ProductList';

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="text-black p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <input
          type="text"
          placeholder="Filtrar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border-gray-100 border-2 rounded"
        />
      </div>
      {loading && <span className="bg-black text-white font-bold">Cargando...</span>}
      {error && <span>Error: {error}</span>}
      {searchTerm.length > 0 && <ProductList products={products} />}
    </div>
  );
};

export default Home;
