import React from 'react';
import './Tooltip.scss';

const positionForTooltip = {
    right: { top: '50%', right: '0' },
    left: { top: '50%', left: '0' },
    top: { top: '0', left: '50%' },
    bottom: { bottom: '0', left: '50%' },
};

const Tootltip = ({ title, position }) => (
    <p
        style={positionForTooltip[position]}
        className="content"
    >{title}</p>
)

export default Tootltip;