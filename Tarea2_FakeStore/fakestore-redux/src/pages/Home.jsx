import React, { useEffect, useState } from 'react';
import { useFakestoreApi } from '../hooks/useFakestoreApi';
import ProductItem from '../components/ProductItem';



const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();
  const [searchTerm, setSearchTerm] = useState("");
  


useEffect(() => {
    getProducts();
  }, []);

return (
     <div className="text-black p-10">
       <div className="flex justify-between items-center mb-4">
         <h1 className="text-2xl font-bold">Home</h1>
         <input
           type="text"
           placeholder="Filtrar productos..."
           defaultValue={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           className="p-2 border-gray-100 border-2 rounded"
         />
              
       </div>
       {loading ? <span className="bg-black text-white font-bold">Cargando...</span> : null}
       {error ? <span>Hubo un error</span> : null}
       {products ? (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <li key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <ProductItem product={product} />
            </li>
          ))}
      </ul>
      
       ) : null}
       
       <div class="mt-auto bg-black text-white text-center p-4 w-full">
        <h5 class="text-sm font-bold text-center flex-grow ">Derechos reservados 2023 | Oscar Noel Angulo Molina</h5>
    </div>
     </div>
     
 );
};

export default Home;

