import { useContext } from "react";
import { MyStore } from "../context/ThemeToggle";

const Container = () => {

  let { setThemeToggle, themeToggle } = useContext(MyStore)

  return (
    <div className={`h-162 ${themeToggle ?  " bg-white " :  " bg-black" } flex items-center justify-center`}>
      <div className="text-center">
        <h1 className={`text-3xl font-bold mb-6 ${themeToggle ?  "text-red-500 " :  "text-white" }`}>
          Theme Toggle
        </h1>

        <button onClick={() => setThemeToggle(prev => !prev)} className=" cursor-pointer bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition">
          {themeToggle ? "🌙 Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Container;