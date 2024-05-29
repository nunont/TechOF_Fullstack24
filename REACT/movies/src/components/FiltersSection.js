import React, {useState} from 'react';

export default function FiltersSection({movies, setMovies}) {
    
    const [name, setName] = useState('');
    
    const onNameChange = (e) => {
        setName(e.target.value);
        const filteredMovies = movies.filter(m => m.name.includes(e.target.value));
        setMovies(filteredMovies);
    }

    return <div>
        <label>Name: </label>
        <input type="text" onChange={onNameChange}></input>

        <label>Gender:</label>
        <select>
            <option value="">All</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
        </select>
    </div>
}