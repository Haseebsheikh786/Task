import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const resetCurrentUser = () => {
    setCurrentUser(null);  
  };

  return (
    <div>
      <UserForm currentUser={currentUser} resetCurrentUser={resetCurrentUser} />
      <UserList setCurrentUser={setCurrentUser} />
    </div>
  );
};

export default App;
