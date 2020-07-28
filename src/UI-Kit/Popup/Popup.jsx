import React from 'react';
import './Popup.scss';

const Popup = ({ closePopup, children }) => (
    <>
        <div className="wrapper" onClick={() => closePopup()} ></div>
        <div className="popupWrapper">
            { children }
        </div>
    </>
);

export default Popup;