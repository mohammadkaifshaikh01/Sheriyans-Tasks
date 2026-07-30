import { useState } from "react";
import UsersCard from "./UsersCard";

const Login = ({ setToggle, usersData }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();

    // console.log(event.target.form.email.value)
    const formm = event.target;
    // console.log("Formm" ,formm)
    let email = formm.email.value;
    let password = formm.password.value;
    console.log("Email", email);

    let user = usersData.find((elem) => elem.email === email);

    if (!user) {
      alert("Email Not Register");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect Password");
      return
    }

    setLoggedInUser(user)

    alert("Login Success Full");
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {!isLoggedIn ? (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Login
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Welcome back! Sign in to your account
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              name="email"
              required
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="password"
              required
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => setToggle((prev) => !prev)}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Register Here
            </span>
          </p>
        </div>
      ) : (
        <div>
          <UsersCard user={loggedInUser} />
        </div>
      )}
    </div>
  );
};

export default Login;
