import React from 'react';

export default function header(props) {
    return (
        <div className="header-wrapper">
            <button>Previous</button>
            <h2 className="header-text">{props.month}</h2>
            <button>Next</button>
        </div>
    )
}