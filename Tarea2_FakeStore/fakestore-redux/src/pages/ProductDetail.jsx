import React, { useEffect, useState } from 'react';
import { useFakestoreApi } from '../hooks/useFakestoreApi';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error, getProductById } = useFakestoreApi();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <div className="text-black p-10">
      {loading ? <span className="bg-black text-white font-bold">Cargando...</span> : null}
      {error ? <span>Hubo un error</span> : null}
      {product ? (
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          {/* Agrega el resto de la información del producto según tus necesidades */}
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetail;
