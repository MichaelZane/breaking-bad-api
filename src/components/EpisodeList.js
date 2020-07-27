import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'

const EpisodeList = () => {
    const [episodes, setEpisode] = useState([])

    useEffect(() => {
        axios
            .get(`https://www.breakingbadapi.com/api/episodes/`)
            .then(res => {
                setEpisode(res.data)
            })
            .catch(err => {
                console.log('A meth Head stole your data, try again!', err)
            })
        }, [])
    
    return (
        <div>
            <SearchForm episodes={episodes}/>
        </div>
    )
}

export default EpisodeList;