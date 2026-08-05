import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const App = () => {
  const [formToggle, setFormToggle] = useState(false);
  const [users , setUsers] = useState([])
  return (
    <div>
      <div className="p-4 flex flex-col gap-5">
        <Navbar setFormToggle={setFormToggle} />
        {formToggle ? <Form setFormToggle={setFormToggle} setUsers={setUsers} /> : <UserCard users={users} />}
      </div>
    </div>
  );
};

export default App;
