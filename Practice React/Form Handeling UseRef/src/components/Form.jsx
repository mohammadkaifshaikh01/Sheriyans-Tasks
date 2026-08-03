import { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef({});
  const [data, setData] = useState([]);
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      userName: formRef.current.userName.value,
      email: formRef.current.email.value,
      password: formRef.current.password.value,
      image: formRef.current.image.value,
    };

    setData([...data, obj]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            User Form
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Fill in your details
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              ref={(event) => (formRef.current.userName = event)}
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              ref={(event) => (formRef.current.email = event)}
              type="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              ref={(event) => (formRef.current.password = event)}
              type="password"
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              ref={(event) => (formRef.current.image = event)}
              type="url"
              placeholder="Enter Your Profile Image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Preview Card */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Users</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.map((elem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <img
                  src={elem.image}
                  alt={elem.userName}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-500"
                />

                <h2 className="mt-4 text-xl font-bold text-center">
                  {elem.userName}
                </h2>

                <p className="text-gray-500 text-center break-all mt-2">
                  {elem.email}
                </p>

                <p className="text-gray-400 text-center mt-1">
                  {elem.password}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
