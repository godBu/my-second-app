import React from 'react';

const Projects = (props) => {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li>Title: {props.title}</li>
            </ul>
        </div>
    );
}

export default Projects;