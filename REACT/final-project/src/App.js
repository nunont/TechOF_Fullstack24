import logo from './logo.svg';
import './App.css';

import { useEffect, useRef, useState } from 'react';

import { db } from './firebase'
import {collection, getDocs, addDoc, doc, updateDoc} from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();
  const hasdofRef = useRef();

  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef)
    setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = async () => {
    let user = {
      name : nameRef.current.value,
      age: Number(ageRef.current.value),
      hasDog: hasdofRef.current.checked
    };
    await addDoc(usersCollectionRef, user);

  };

  const updateCurrentUser = async (userId, userAge) => {
    const userRef = doc(db, "users", userId);
    
    await updateDoc(userRef, {
      age: userAge + 1
    })
    getUsers();
  }

  return <>
    <input placeholder='Name' ref={nameRef} />
    <input placeholder='Age' ref={ageRef} />
    <input type='checkbox' placeholder='Name' ref={hasdofRef} />
    Has a dog
    <button onClick={addUser}>Add User</button>
    <h1>Users</h1>
    {users.map((user) => {
      return (
        <div>
          {user.name} is {user.age} years old and he {user.hasDog ? 'has' : 'hasn´t'} a dog
          <button onClick={() => updateCurrentUser(user.id, user.age)}>increase 1</button>
        </div>
      )
    })}
  </>;
}

export default App;
