import React, { useState } from 'react';
import Popup from '../UI-Kit/Popup/Popup';

const withPopup = (Component, { isDefaultOpen = false } = {}) => (props) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);
    const [content, setContent] = useState(null);

    const closePopup = () => setIsOpen(false);
    const openPopup = ({ PopupComponent, content }) => {
        setIsOpen(true);
        setContent(<PopupComponent popupContent={content} closePopup={closePopup} />);
    };

    return (
        <>
            <Component {...props } openPopup={openPopup} />
            {
                isOpen && (
                    <Popup closePopup={closePopup}>
                        { content }
                    </Popup>
                )
            }
        </>
    )
};

export default withPopup;