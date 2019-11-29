import React from 'react';

const CharacterCard = (props) => {

    return (
        <div>
            <img src={props.url} alt={props.name}/>
                <span>{props.name}</span>
                <span> {props.birthday} </span>
                <span> {props.occupation} </span>
                <span> {props.status} </span>
                <span> {props.nickname} </span>
                <span>{props.appearance} </span>
                <span>{props.portrayed} </span>
                <span>{props.category} </span>
        </div>
    )
}
export default CharacterCard;