import React, { useState } from 'react';
import Modal from './Modal';
import Description from './Description';

/**
 * Component for a Pokemon Card
 * @param {Object} props React props 
 * @returns Content of a Pokemon Card
 */
const Card = (props) => {
    // state variable to show modal or not
    const [show, setShow] = useState(false);

    // function for toggle button
    const showModal = (e) => {
        setShow(!show);
    }

    return (
        <div>
            <h4 className='cardName'>{props.cardName}</h4>
            <img src={props.image} alt={props.cardName} />
            <div>
                <span className="number">
                    <small>#0{props.id}</small>
                </span>
                <br/>

                <span>{props.type}</span>
                <br />
                <br />
            </div>
            <span className='cardButtons'>
                
                <button className='toggle-button' onClick={(e) => {showModal(e)}}>
                    More Info
                </button>
                {show === true ? <Description
                    weight={props.weight}
                    height={props.height}
                /> : ('')}
                <Modal show={show} onClose={showModal} />
            </span>

        </div>
    )
};

export default Card;