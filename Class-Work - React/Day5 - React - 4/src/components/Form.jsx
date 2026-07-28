//Brute Force Apply

import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[400px] bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Form Brute Force</h1>

        <div className="space-y-4">
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Name"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-8 border-t pt-5">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>

          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="font-medium">
                {userName || "Your name will appear here"}
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium">
                {email || "Your email will appear here"}
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Password</p>
              <p className="font-medium">
                {/* {password ? "*".repeat(password.length) : "Your password will appear here"} */}
                {password || "Your password will appear here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
