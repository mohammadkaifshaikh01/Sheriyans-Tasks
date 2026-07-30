import { useState } from "react";

const Register = ({ setToggle, setUsersData }) => {
  const [formData, setFormData] = useState({});

  const formHandle = (event) => {
    event.preventDefault();
    // let key = event.target.name
    // let value = event.target.value
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    setUsersData((prev) => [...prev, formData]);
    alert("User Register Success Fully!");
    setFormData({
      name: "",
      image: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Create your account to get started
        </p>

        <form onSubmit={formSubmit} className="space-y-4">
          <input
            required
            value={formData.image}
            name="image"
            onChange={formHandle}
            type="url"
            placeholder="Enter Image Url"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
             value={formData.name}
            name="name"
            onChange={formHandle}
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            required
             value={formData.email}
            name="email"
            onChange={formHandle}
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            required
             value={formData.password}
            name="password"
            onChange={formHandle}
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Login Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
