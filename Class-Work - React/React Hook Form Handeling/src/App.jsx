import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const App = () => {
  const [formToggle, setFormToggle] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [updatedUserCard, setUpdateUserCard] = useState(null);


  const deleteCard = (id) => {
    const deletEmployee = users.filter((elem, index) => index !== id);
    console.log(deletEmployee);
    setUsers(deletEmployee);
    localStorage.setItem("users", JSON.stringify(deletEmployee));
  };

  return (
    <div>
      <div className="p-4 flex flex-col gap-5">
        <Navbar setFormToggle={setFormToggle} setUpdateUserCard={setUpdateUserCard}/>
        {formToggle ? (
          <Form
            setFormToggle={setFormToggle}
            setUsers={setUsers}
            users={users}
            updatedUserCard={updatedUserCard}
            setUpdateUserCard={setUpdateUserCard}
          />
        ) : (
          <UserCard
            users={users}
            deleteCard={deleteCard}
            setFormToggle={setFormToggle}
            setUpdateUserCard={setUpdateUserCard}
          />
        )}
      </div>
    </div>
  );
};

export default App;

