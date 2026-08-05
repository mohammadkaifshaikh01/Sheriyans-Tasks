import { useState } from "react";

const UserCard = ({ users, deleteCard, setFormToggle, setUpdateUserCard }) => {
  const [profileId, setProfileId] = useState(null);

  return (
    <div className="flex flex-wrap gap-6">
      {users.map((elem, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 w-80 hover:shadow-xl transition"
        >
          <div className="flex flex-col items-center">
            <img
              src={elem.image}
              alt={elem.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
            />

            <h3 className="mt-4 text-2xl font-bold text-slate-800">
              {elem.name}
            </h3>

            {/* Show details only when profile is true */}
            {profileId === index && (
              <div className="w-full mt-5 space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-slate-600">
                    Employee Id
                  </span>
                  <span className="text-sm break-all">{elem.idNumber}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-slate-600">Email</span>
                  <span className="text-sm break-all">{elem.gmail}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-slate-600">Password</span>
                  <span>{elem.password}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-slate-600">
                    Department
                  </span>
                  <span>{elem.department}</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setProfileId(profileId === index ? null : index)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              {profileId === index ? "Close" : "View Profile"}
            </button>

            <div className="flex w-2xs gap-2">
              <button
                onClick={() => deleteCard(index)}
                className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setUpdateUserCard(elem);
                  setFormToggle((prev) => !prev);
                }}
                className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
