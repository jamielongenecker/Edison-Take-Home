import React, { useState } from 'react';
import Modal from './Modal';

const Card = (props) => {
    const [show, setShow] = useState(false);
    const showModal = (e) => {
        setShow(!show);
    }

    return (
        <div className='tile'>
            <h4 className='cardName'>{props.cardName}</h4>
            <div className="number">
                <small>#0{props.id}</small>
            </div>
            <img src={props.image} alt={props.cardName} />

            <p>{props.type}</p>
            <div className='cardButtons'>
                
                <button className='toggle-button' onClick={(e) => {showModal(e)}}>
                    More Info
                </button>
                <Modal show={show} onClose={showModal} />
            </div>

        </div>
    )
};

export default Card;