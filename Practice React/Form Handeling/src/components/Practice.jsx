import { useState } from "react";

const Practice = () => {
   const [formData, setFormData] = useState({});
   const [userData, setUserData] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = () => {
      setUserData(formData);
   };

   return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800">
               User Form
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-6">
               Enter your details below
            </p>

            <div className="space-y-4">
               <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
               />

               <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
               />

               <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
               >
                  Submit
               </button>
            </div>

            <div className="mt-8 border-t pt-6">
               <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Submitted Data
               </h2>

               <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                     <p className="text-sm text-gray-500">Email</p>
                     <p className="font-medium text-gray-800">
                        {userData.email || "No email submitted"}
                     </p>
                  </div>

                  <div>
                     <p className="text-sm text-gray-500">Password</p>
                     <p className="font-medium text-gray-800">
                        {userData.password || "No password submitted"}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Practice;
