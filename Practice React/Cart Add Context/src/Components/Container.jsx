import { useContext } from "react";
import { CartStore } from "../Context/CartContext";

const Container = () => {
  let { cartOpen, setCartOpen } = useContext(CartStore);

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 2499,
      category: "Electronics",
      image: "https://picsum.photos/400/300?random=1",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 3499,
      category: "Electronics",
      image: "https://picsum.photos/400/300?random=2",
      rating: 4.3,
    },
    {
      id: 3,
      title: "Running Shoes",
      price: 1999,
      category: "Footwear",
      image: "https://picsum.photos/400/300?random=3",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Backpack",
      price: 1299,
      category: "Accessories",
      image: "https://picsum.photos/400/300?random=4",
      rating: 4.2,
    },
    {
      id: 5,
      title: "Cotton T-Shirt",
      price: 799,
      category: "Clothing",
      image: "https://picsum.photos/400/300?random=5",
      rating: 4.4,
    },
    {
      id: 6,
      title: "Laptop Stand",
      price: 1499,
      category: "Accessories",
      image: "https://picsum.photos/400/300?random=6",
      rating: 4.7,
    },
    {
      id: 7,
      title: "Coffee Mug",
      price: 499,
      category: "Home",
      image: "https://picsum.photos/400/300?random=7",
      rating: 4.1,
    },
    {
      id: 8,
      title: "Mechanical Keyboard",
      price: 2999,
      category: "Electronics",
      image: "https://picsum.photos/400/300?random=8",
      rating: 4.8,
    },
    {
      id: 9,
      title: "Denim Jacket",
      price: 2499,
      category: "Clothing",
      image: "https://picsum.photos/400/300?random=9",
      rating: 4.5,
    },
    {
      id: 10,
      title: "Water Bottle",
      price: 699,
      category: "Home",
      image: "https://picsum.photos/400/300?random=10",
      rating: 4.3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((elem) => (
          <div
            key={elem.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={elem.image}
              alt={elem.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-5">

              {/* Category */}
              <p className="text-sm text-gray-500 mb-1">
                {elem.category}
              </p>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800">
                {elem.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-600">
                  {elem.rating}
                </span>
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-5">
                <p className="text-xl font-bold text-gray-900">
                  ₹{elem.price}
                </p>

                <button
                  // onClick={() => setCartOpen(false)}
                  className=" cursor-pointer bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Container;