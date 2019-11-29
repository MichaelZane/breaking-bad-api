import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

const SearchForm = props => {
    //setting state for searchs
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    //useEffect for Filtering results
    useEffect(() => {
        const data = props.characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
        setResults(data);
    }, [search, props.characters]);
// use event handler
    
    const handleChange = event => {
        setSearch(event.target.value);
    };
    return (
        <section>
            <form>
                <input
                type='text'
                name='textfield'
                placeholder='Search'
                value={search}
                onChange={handleChange}
                />
            </form>
                {results.length === 0
                ? (<div>
                    {props.characters.map(character => (
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
                </div>)
                : (<div>
                    {results.map(character => (
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

                )}

        </section>
    )

}
export default SearchForm;