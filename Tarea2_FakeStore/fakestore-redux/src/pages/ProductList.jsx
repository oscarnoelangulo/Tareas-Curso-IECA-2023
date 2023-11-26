// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => (
  <ul className="grid grid-cols-4 gap-10">
    {products.map((product) => (
      <li key={product.id}>
        <ProductItem product={product} />
      </li>
    ))}
  </ul>
);

export default ProductList;
