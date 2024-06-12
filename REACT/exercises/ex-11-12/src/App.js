import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import UserContext from './Contexts/UserContext';

import UserDisplay from './Components/UserDisplay';
import UserEdit from './Components/UserEdit';

function App() {
  const userInitial = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    phone: '123-456-7890'
  };

  const [user, setUser] = useState(userInitial);

  return <>
    <UserContext.Provider value={{user, setUser}}>
      <UserDisplay />
      <UserEdit />
    </UserContext.Provider>
  </>
}

export default App;
