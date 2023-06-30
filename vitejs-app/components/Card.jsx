import React from 'react';

function Card(props) {
    console.log(props)
    return (
        <div className='card'>
            <img src={props.img} alt="sologne" className='card--img'/>
            <div className="card--stats">
                <span className='card--title bold'>{props.name}</span>
            </div>
                <img src="./src/assets/star.png" alt="star-icon" className='card--star' />
                <span className='rate'>{props.rate}</span>
            <p className='card--text gray'>{props.style}</p>
            <p className="card--text gray">{props.date}</p>
            <p className="card--text last" ><span className='bold'>{props.price}</span>  / par nuit</p>
        </div>
    );
}

export default Card;