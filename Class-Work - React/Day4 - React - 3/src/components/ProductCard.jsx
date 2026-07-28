const ProductCard = ({products , deleteProduct}) => {
  // console.log(deleteProduct)
  return (
    <div className="w-68 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={products.image}
        alt={products.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {products.category}
        </span>

        <h2 className="text-xl font-bold text-gray-800 mt-3 line-clamp-2">
          {products.title}
        </h2>

        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold text-green-600">
            ${products.price}
          </p>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-medium">
            ⭐ {products.rating}
          </span>
        </div>

        <button onClick={() => deleteProduct(products.id)} className="w-full mt-6 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
        Delete
        </button>
      </div>
    </div>
    
  );
};

export default ProductCard;