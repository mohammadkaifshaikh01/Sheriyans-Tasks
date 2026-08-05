const Navbar = ({setFormToggle, setUpdateUserCard}) => {
  setUpdateUserCard(null)
  return (
    <nav className="h-20 bg-blue-50 shadow-md px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
          src="https://cdn.pixabay.com/photo/2024/02/02/04/20/men-8547227_640.png"
          alt="Logo"
        />

        <h1 className="text-2xl font-bold text-blue-600">
          {/* Profile Hub */}
        </h1>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <p className="cursor-pointer hover:text-blue-600 transition">Home</p>

        <p className="cursor-pointer hover:text-blue-600 transition">Contact</p>

        <p className="cursor-pointer hover:text-blue-600 transition">About</p>
      </div>

      {/* Button */}
      <button onClick={() => setFormToggle((prev) => !prev)} className=" bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
        Create Profile
      </button>
    </nav>
  );
};

export default Navbar;
