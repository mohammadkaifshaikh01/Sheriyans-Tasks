import { useRef, useState } from "react";

const Form = () => {
  //Create Seprate Refrence For All Inputs

  //   const nameRef = useRef(null);
  //   const priceRef = useRef(null);
  //   const catRef = useRef(null);
  //   const imageRef = useRef(null);

  //Using One Refrence As a Object In All Inputs
  const formRef = useRef({});

  //Agar Ui Me Dikhana Hai Saare Products To Use State Use hoga

  //Created Usestate for showing products in Ui
  const [products, setProducts] = useState([]);

  console.log("This Is Product -> " , products)

  //Taking Values From Inputs Using Submit And Refrence
  const handleSubmit = (e) => {
    e.preventDefault();
    //=> Formref ke andar object milega current uske andar values hai
    console.log("Name Ref =>", formRef.current.productName.value);
    console.log("Cat Ref =>", formRef.current.price.value);
    console.log("Price Ref =>", formRef.current.category.value);
    console.log("Image Ref =>", formRef.current.imageRef.value);

    let obj = {
      productName: formRef.current.productName.value,
      price: formRef.current.price.value,
      Category: formRef.current.category.value,
      imageUrl: formRef.current.imageRef.value,
    };

    setProducts(obj)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Add Product
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Fill in the product details
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            ref={(event) => (formRef.current.productName = event)}
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            ref={(event) => (formRef.current.price = event)}
            type="number"
            placeholder="Price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Select Category
            </label>

            <select
              ref={(event) => (formRef.current.category = event)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose Category</option>
              <option value="MENS">👔 Mens</option>
              <option value="WOMENS">👗 Womens</option>
              <option value="KIDS">🧸 Kids</option>
            </select>
          </div>

          <input
            ref={(event) => (formRef.current.imageRef = event)}
            type="text"
            placeholder="Image URL"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
