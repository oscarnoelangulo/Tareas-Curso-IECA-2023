import { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/cartSlice';
import { clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector(state => state.cart.products);
    const totalProducts = useSelector(state => state.cart.totalProducts);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    
 // Obtener el carrito del localStorage al cargar la página
 useEffect(() => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    dispatch(clearCart()); // Limpiar el carrito actual en Redux
    parsedCart.forEach(product => dispatch(addToCart(product))); // Restaurar el carrito desde localStorage
  }
}, [dispatch]);

// Actualizar el localStorage cuando cambia el carrito
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);    


    useEffect(()=>{
        setTotal(
            cart.reduce((acc, product) => acc + product.price, 0).toFixed(1));
    }, [cart]);

    const handleDeleteFromCart = (product) => {

        dispatch(removeFromCart(product.id));
        
    };

    const handleClearCart = () => {
      dispatch(clearCart());
    };

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-black">Carrito de Compra(s)</h1>
            <ul className="flex flex-col grid grid-cols-2 gap-6 font-bold text-black">

  
  {cart.map((product) => (
    <div key={product.id} className="flex flex-col items-center text-center rounded mt-2">
      <ProductItem product={product} />
      <button
        className="bg-red-500 hover:bg-red-800 text-white text-sm font-bold py-2 px-4 rounded mt-2"
        onClick={() => handleDeleteFromCart(product)}
      >
        Quitar del carrito
      </button>
      
    </div>
  ))}
</ul>

            <span className="text-black font-bold text-2xl"> Total de la compra: ${total} </span>
            <span className="text-black font-bold text-2xl"> Total de productos: {totalProducts}</span>

      <div className="flex flex-col gap-4">
      {/* ... */}
      
        <button
            className="bg-gray-500 hover:bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded mt-2"
            onClick={handleClearCart}
            >
        Vaciar Carrito
      </button>
    </div>                
{/* <div className="fixed bottom-0 w-full text-center bg-black">
    <Link to="/" className="font-bold text-white hover:text-gray-300 block p-4">
        Regresar a Home
    </Link>
</div> */}



        
        </div>
        
        );
        
    
};

export default Cart;