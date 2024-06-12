import React, {useContext} from 'react';
import UserContext from '../Contexts/UserContext';

export default function UserDisplay() {

    const {user} = useContext(UserContext);

    return <>
        <h1>User Display</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
    </>

}