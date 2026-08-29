import { useContext } from "react";
import { MyStore } from "../context/ThemeToggle";

const Navbar = () => {

  let {themeToggle}  = useContext(MyStore)
  return (
    // {`h-162 ${themeToggle ?  " bg-white " :  " bg-black" } flex items-center justify-center`}>
    <nav
      className={`h-20 px-8 flex items-center justify-between ${themeToggle ? "bg-white border-b border-gray-200 " : "bg-black border-b border-gray-200"} `}
    >
      {/* Left */}
      <div>
        <h2 className={`text-xl font-semibold" ${themeToggle ? "text-gray-800" : "text-white"}`}>Dashboard</h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <div className="text-right">
          <p className={`text-sm font-semibold ${themeToggle ? "text-gray-800" : "text-white"} `}>Kaif</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          K
        </div>

        <button className=" cursor-pointer px-4 py-2 rounded-lg bg-red-50 text-red-600 font-medium hover:bg-red-100 transition">
          Dark
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
