import React from 'react';



const CharacterCard = (props) => {

    
        
    return (
      <div className="card" >
                   
        <img className="single-card" src={props.img} alt='characters' /> 
          
        <h1>{props.name}</h1> 
        <h3> {props.nickname} </h3>                  
        <p> {props.occupation } </p>
        <p> {props.birthday} </p>
       
        <p>{props.portrayed} </p>
        <p>{props.category} </p>
        <p> {props.status} </p>
      </div>           
     
    
    )
}
export default CharacterCard;