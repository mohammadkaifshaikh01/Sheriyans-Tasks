// Step 1 => Install React Hook Form {npm i react-hook-form}
import { useForm } from "react-hook-form"; //Import React hook Form
const ReactHookForm = () => {
  // let data = useForm()
  // console.log("UseForm =>" , data) //2 Re Renders 1 For Js 1 Self

  const {
    register,
    handleSubmit,
    reset,
   //  formState: { errors },
  } = useForm(); // De Structuring Taking Import Data From  UseForm

  const formSubmit = (data) => {
    console.log("Form Submit Product",data);
    reset()
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          React Hook Form
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Fill in the product details
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          <input
            {...register("productName")} // ... Register Taking All Value inside bracket is the unique key
            // ref={(event) => (formRef.current.productName = event)}
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("price")} // ... Register Taking All Value inside bracket is the unique key
            // ref={(event) => (formRef.current.price = event)}
            type="number"
            placeholder="Price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Select Category
            </label>

            <select
              {...register("category")} // ... Register Taking All Value inside bracket is the unique key
              //   ref={(event) => (formRef.current.category = event)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose Category</option>
              <option value="MENS">👔 Mens</option>
              <option value="WOMENS">👗 Womens</option>
              <option value="KIDS">🧸 Kids</option>
            </select>
          </div>

          <input
            {...register("image")} // ... Register Taking All Value inside bracket is the unique key
            // ref={(event) => (formRef.current.imageRef = event)}
            type="url   "
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

export default ReactHookForm;
