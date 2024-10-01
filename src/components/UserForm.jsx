import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../store/userSlice";

const UserForm = ({ currentUser, resetCurrentUser }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    } else {
      setUserData({ id: "", name: "", email: "" });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      dispatch(updateUser({ id: currentUser.id, userData }));
      resetCurrentUser();
    } else {
      dispatch(addUser({ ...userData, id: Date.now() }));
    }
    setUserData({ id: "", name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>{currentUser ? "Update User" : "Add User"}</h2>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit" className="submit-button">
        {currentUser ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default UserForm;
