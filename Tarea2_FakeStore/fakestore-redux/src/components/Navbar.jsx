import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Home from "../pages/Home";



const Navbar = () => {

    const totalProducts = useSelector((state) => state.cart.totalProducts);
  
return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <Link to="/"><h1 className="text-4xl font-bold text-white">FakeStore</h1></Link>
          <Link className = "font-bold text-white" to="/cart">Ver Carrito({totalProducts})</Link>
      </div>
      <div>
        
      </div>
    </nav>
    
  );

};

export default Navbar;
