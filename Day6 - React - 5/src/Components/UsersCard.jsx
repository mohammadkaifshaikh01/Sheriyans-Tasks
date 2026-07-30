const UsersCard = ({user}) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
      <div className="flex flex-col items-center">
        <img
          src={user.image}
          alt= {user.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />

        <h3 className="mt-4 text-xl font-bold text-gray-800">
          {user.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
           {user.email}
        </p>

        {/* <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Profile
        </button> */}
      </div>
    </div>
  );
};

export default UsersCard;  