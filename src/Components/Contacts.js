import React from 'react';

const Contacts = (props) => {
    return (
        <div>
            <form>
                <div>Email: {props.email}</div>
            </form>
        </div>
    );
}

export default Contacts;