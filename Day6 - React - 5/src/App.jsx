import { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(usersData )

  return (
    <div>
      {toggle ? (
        <Login setToggle={setToggle} usersData={usersData} />
      ) : (
        <Register setToggle={setToggle} setUsersData={setUsersData} />
      )}
    </div>
  );
};

export default App;
