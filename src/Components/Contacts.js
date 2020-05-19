import React from 'react';

const Contacts = (props) => {
    return (
        <div>
            <form>Email: {props.email}</form>
        </div>
    );
}

export default Contacts;