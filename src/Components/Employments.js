import React from 'react';

const Employments = (props) => {
    return (
        <div>
            <h1>Job Experience</h1>
            <ul>
                <li>JobTitle: {props.jobtitle}</li>
            </ul>
            <p>Here lies my job experiences</p>
        </div>
    );
}

export default Employments;