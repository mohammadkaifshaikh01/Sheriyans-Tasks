import { useForm } from "react-hook-form";
const Form = ({ setFormToggle, setUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // console.log(errors)

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
              {...register("image", { required: "Image Is Required" })}
              type="url"
              placeholder="Enter URL of your image"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p>{errors.image ? errors.image.message : ""}</p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Name
            </label>
            <input
              {...register("name", {
                required: "Name Is Required",
                pattern: {
                  value: /^\S+$/,
                  message: "Blank Spaces are not allowed",
                },
              })}
              type="text"
              placeholder="Enter Name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p>{errors.name ? errors.name.message : ""}</p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Gmail
            </label>
            <input
              {...register("gmail", {
                required: "Email Is Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Enter A Valid Email Address",
                },
              })}
              type="email"
              placeholder="Enter Gmail"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p>{errors.gmail ? errors.gmail.message : ""}</p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              ID Number
            </label>
            <input
              type="number"
              {...register("idNumber", { required: "ID Is Required" })}
              placeholder="Enter Employee ID"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p>{errors.idNumber ? errors.idNumber.message : ""}</p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password Is Required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "uppercase letter, a lowercase letter, a number, and a special character.",
                },
                minLength: {
                  value: 8,
                  message: "Password Must Be 8 Character Long",
                },
              })}
              type="password"
              placeholder="Enter Password"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p>{errors.password ? errors.password.message : ""}</p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Department
            </label>
            <select
              {...register("department", {
                required: "Department Is Required",
              })}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Development">Development</option>
              <option value="HR">HR</option>
              <option value="Accounts">Accounts</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
            </select>
            <p>{errors.department ? errors.department.message : ""}</p>
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
