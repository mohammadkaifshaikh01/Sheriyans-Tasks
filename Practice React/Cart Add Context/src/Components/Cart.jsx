const Cart = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Shopping Cart
          </h1>

          <p className="text-slate-500 mt-1">
            Review your products before checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Products */}
          <div className="lg:col-span-2 space-y-4">

            {/* Product 1 */}
            <div className="bg-white rounded-xl shadow-sm p-5 flex gap-5 items-center">

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-800">
                  Nike Running Shoes
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Men's Sports Shoes
                </p>

                <p className="text-xl font-bold text-blue-600 mt-3">
                  ₹4,999
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center border border-slate-300 rounded-lg">
                <button className="w-9 h-9 text-lg hover:bg-slate-100">
                  −
                </button>

                <span className="w-10 text-center font-semibold">
                  1
                </span>

                <button className="w-9 h-9 text-lg hover:bg-slate-100">
                  +
                </button>
              </div>

              {/* Remove */}
              <button className="text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>

            </div>


            {/* Product 2 */}
            <div className="bg-white rounded-xl shadow-sm p-5 flex gap-5 items-center">

              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Product"
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-800">
                  Classic Watch
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Premium Wrist Watch
                </p>

                <p className="text-xl font-bold text-blue-600 mt-3">
                  ₹2,499
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center border border-slate-300 rounded-lg">
                <button className="w-9 h-9 text-lg hover:bg-slate-100">
                  −
                </button>

                <span className="w-10 text-center font-semibold">
                  2
                </span>

                <button className="w-9 h-9 text-lg hover:bg-slate-100">
                  +
                </button>
              </div>

              {/* Remove */}
              <button className="text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>

            </div>

          </div>


          {/* Cart Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">

            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Cart Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-slate-600">
                <span>Total Items</span>
                <span className="font-semibold text-slate-800">
                  3
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">
                  ₹7,498
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span className="text-green-600 font-semibold">
                  Free
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between">
                <span className="text-lg font-bold text-slate-800">
                  Total Price
                </span>

                <span className="text-xl font-bold text-blue-600">
                  ₹7,498
                </span>
              </div>

            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Proceed to Checkout
            </button>

            <button className="w-full mt-3 border border-red-300 text-red-500 hover:bg-red-50 py-3 rounded-lg font-semibold transition">
              Remove All
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;