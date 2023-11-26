
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";


const ProductItem = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert("Producto añadido al carrito");
    }

    const handleDeleteToCart = () => {
        dispatch(removeFromCart(product));
        alert("Producto eliminado del carrito");

    }
    
    
    
    return (
        <li className="flex flex-col gap-2 p-2 items-center bg-white rounded-xl shadow mt-auto">
          <img src={product.image} className="w-13" />
          <span className="text-center font-bold">{product.title}</span>
          <span className="text-center font-bold text-xl text-blue-600">${product.price}</span>
          <span className="text-center font-bold text-xl text-blue-600">{product.quantity}</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-s font-bold py-2 px-4 rounded"
            onClick={() => handleAddToCart(product)}
          >
            Añadir al carrito
          </button>
        </li>
      );
      
};

export default ProductItem;