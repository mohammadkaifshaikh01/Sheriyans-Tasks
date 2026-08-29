import { useContext } from "react";
import { CartStore } from "../Context/CartContext";

const Navbar = () => {
  let { setCartOpen } = useContext(CartStore);
  return (
    <div>
      <nav className="h-20 px-8 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm">
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">MyShop</h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <p
            onClick={() => setCartOpen(true)}
            className="text-gray-600 cursor-pointer hover:text-blue-600"
          >
            Home
          </p>

          <p className="text-gray-600 cursor-pointer hover:text-blue-600">
            Products
          </p>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(false)}
            className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🛒 Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
