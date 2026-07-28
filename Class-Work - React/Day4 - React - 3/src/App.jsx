import { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Mouse",
      category: "Electronics",
      price: 25.99,
      stock: 45,
      rating: 4.5,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      title: "Gaming Keyboard",
      category: "Electronics",
      price: 59.99,
      stock: 20,
      rating: 4.7,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      title: "Running Shoes",
      category: "Footwear",
      price: 89.99,
      stock: 15,
      rating: 4.4,
      image: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      title: "Leather Wallet",
      category: "Accessories",
      price: 19.99,
      stock: 60,
      rating: 4.2,
      image: "https://picsum.photos/200?random=4",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      category: "Electronics",
      price: 49.99,
      stock: 18,
      rating: 4.6,
      image: "https://picsum.photos/200?random=5",
    },
    {
      id: 6,
      title: "Smart Watch",
      category: "Wearables",
      price: 129.99,
      stock: 12,
      rating: 4.8,
      image: "https://picsum.photos/200?random=6",
    },
    {
      id: 7,
      title: "Backpack",
      category: "Bags",
      price: 39.99,
      stock: 35,
      rating: 4.3,
      image: "https://picsum.photos/200?random=7",
    },
    {
      id: 8,
      title: "Water Bottle",
      category: "Fitness",
      price: 14.99,
      stock: 80,
      rating: 4.1,
      image: "https://picsum.photos/200?random=8",
    },
    {
      id: 9,
      title: "Headphones",
      category: "Electronics",
      price: 79.99,
      stock: 22,
      rating: 4.6,
      image: "https://picsum.photos/200?random=9",
    },
    {
      id: 10,
      title: "Laptop Stand",
      category: "Office",
      price: 34.99,
      stock: 28,
      rating: 4.4,
      image: "https://picsum.photos/200?random=10",
    },
  ]);

  const deleteProduct = (id) => {
    console.log(id);
    const prod = products.filter((e) => e.id !== id);
    setProducts(prod);
    // console.log(prod)
  };
  return (
    <div className="flex flex-wrap gap-4 p-10">
      {products.map((elem) => {
        {
          /* console.log(elem) */
        }
        return (
          <ProductCard
            key={elem.id}
            products={elem}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
};

export default App;
