import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'


const CharacterList = () => {
    //set state for data
    const [characters, setCharacters] = useState([]);
// api request using useEffect
    useEffect(() => {
        axios
            .get(`https://www.breakingbadapi.com/api/characters/`)
            .then(res => {
                setCharacters(res.data);
                console.log(res.data)
            })
            .catch(error => {
                console.log('A meth Head stole your data, try again!', error)
            })
    }, []);

    return (
        <div className="card-wrapper" >
            
            {characters.map(character => (
                <CharacterCard
                    key= {character.id}
                    img={character.img}
                    name={character.name}
                    birthday={character.birthday}
                    occupation={character.occupation}
                    status={character.status}
                    nickname={character.nickname}
                    portrayed={character.portrayed}
                    category={character.category}

                />
            ))}
                
            

        
        </div>
    );
}
 
export default CharacterList;