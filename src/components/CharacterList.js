import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const CharacterList = () => {
    //set state for data
    const [characters, setCharacters] = useState([]);
// api request using useEffect
    useEffect(() => {
        axios
            .get(`https://www.breakingbadapi.com/api/characters/`)
            .then(response => {
                setCharacters(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log('A meth Head stole your data, try again!', error)
            })
    }, []);

    return (
        <div>
            <SearchForm characters={characters}/>
        </div>
    );
}
 
export default CharacterList;