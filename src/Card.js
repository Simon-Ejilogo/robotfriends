import React from 'react';

const  Card = (props)=>{

    const {id, name, email} = props;

    return(

    <div className="tc bg-light-green dib br3 pa3 bw2 ma2 grow bw2 shadow-5">
        <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
    
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    )
}

export default Card;