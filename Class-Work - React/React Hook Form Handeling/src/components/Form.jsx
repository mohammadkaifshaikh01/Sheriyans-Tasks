import { useForm } from "react-hook-form";
const Form = ({ setFormToggle, setUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (usersData) => {
    // console.log(e)
    setUsers((prev) => [...prev, usersData]);
    reset();
    setFormToggle((prev) => !prev);
  };

  return (
    <div className=" fixed inset-0 z-50  backdrop-blur-sm flex items-center justify-center px-3 py-1">
      <div className="w-full max-w-lg max-h-[90vh] bg-white rounded-2xl shadow-xl p-5 overflow-y-auto">
        <button
          onClick={() => setFormToggle((prev) => !prev)}
          className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Close
        </button>
        <h1 className="text-3xl font-bold text-center text-slate-800">
          Employee Profile
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-2">
          Fill in the employee details
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-3">
          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Profile Image
            </label>
            <input
              {...register("image")}
              type="url"
              placeholder="Enter URL of your image"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Gmail
            </label>
            <input
              {...register("gmail")}
              type="email"
              placeholder="Enter Gmail"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              ID Number
            </label>
            <input
              type="number"
              {...register("idNumber")}
              placeholder="Enter Employee ID"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter Password"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Department
            </label>
            <select
              {...register("department")}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Development</option>
              <option>HR</option>
              <option>Accounts</option>
              <option>Sales</option>
              <option>Marketing</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
