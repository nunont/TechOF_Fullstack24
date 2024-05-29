import React, {useState} from 'react';

export default function MovieForm({movies, setMovies}) {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [rating, setRating] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onGenderChange = (e) => {
        setGender(e.target.value);
    }

    const onRatingChange = (e) => {
        setRating(e.target.value);
    }

    const createMovie = () => {
        const newMovie = {
            name: name,
            gender: gender,
            rating: parseInt(rating)
        }
        setMovies([...movies, newMovie]);
    };


    return <div>
        <label>Name: </label>
        <input type="text" onChange={onNameChange}></input>

        <label>Gender</label>
        <select onChange={onGenderChange}>
            <option value="">All</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
        </select>

        <label>Rating</label>
        <select onChange={onRatingChange}>
            <option value=""></option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>

        <button onClick={createMovie}>Create</button>
    </div>

}