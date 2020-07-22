import React from 'react';

const ImageCard = ({ item }) => {
    return (
        <div className="card">
            <p>{item.id}</p>
            <p>{item.src}</p>
            <p>{item.tooltip}</p>
            <p>{item.top}</p>
        </div>
    )
}

export default ImageCard;