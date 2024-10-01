import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";

const UserList = ({ setCurrentUser }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleUpdateClick = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} ({user.email})
            <div className="button-group">
              <button
                onClick={() => handleUpdateClick(user)}
                className="update-button"
              >
                Update
              </button>
              <button
                onClick={() => dispatch(deleteUser(user.id))}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
