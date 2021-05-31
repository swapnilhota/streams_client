import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Delete Stream
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;

//to be used for delete streams