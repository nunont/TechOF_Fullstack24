
import React, {useContext} from 'react';
import UserContext from '../Contexts/UserContext';


export default function UserEdit() {

    const {user, setUser} = useContext(UserContext);

    const updateUser = (e) => {
        let target = e.target;
        let name = target.name;

        //setUser({...user, [name]: target.value});
        if (name === 'age') {
            user.age = target.value;
        } else if (name === 'email') {
            user.email = target.value;
        }
        else if (name === 'name') {
            user.name = target.value;
        }
        let newUser = {...user};
        setUser(newUser);
    }

    return <>
        <h1>User Edit</h1>
        <input type="text" name='name' value={user.name} onChange={e => updateUser(e)} />
        <input type="text" name='email' value={user.email} onChange={e => updateUser(e) } />
        <input type="number" name="age" value={user.age} onChange={e => updateUser(e)} />
        <input type="text" name="phone" value={user.phone} onChange={e => updateUser(e)} />

    </>
}