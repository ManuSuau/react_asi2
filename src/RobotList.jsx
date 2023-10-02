import React from 'react';
import Robot from './Robot';

function RobotList({ robots }) {
    return (
        <div className="RobotList">
            <h2>Robot List</h2>
            <ul>
                {robots.map((robot) => (
                    <li key={robot.id}>
                        <Robot robot={robot} />
                    </li>
                ))
                }
            </ul>
        </div>
    );

}

export default RobotList;