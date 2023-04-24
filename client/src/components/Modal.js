import React from "react";

/**
 * Reusable component for a Modal
 * @param {Object} props React props
 * @returns Content of Modal and a close button
 */
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