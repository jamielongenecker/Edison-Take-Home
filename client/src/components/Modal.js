import React, { useState } from "react";
import "./modal.css"

const Modal = (props) => {
    if(!props.show) {
        return null;
    }

    const onClose = (e) => {
        props.onClose && props.onClose(e);
    }


    return (
        <div className="modal">
            <div className="content">{props.children}</div>
            <div className="actions">
                <button className='toggle-button' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;