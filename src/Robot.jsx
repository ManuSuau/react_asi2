import React from 'react';
import Label from './Label';

function Robot({ robot }) {
    return (
        <div className="Robot">
            <h3>Robot Details</h3>
            <Label label="Name" value={robot.title} />
            <img src={robot.visual_src} alt={`Image of ${robot.title}`} />
        </div>
    );
}

export default Robot;