import React from 'react';

const Service = ({ service }) => {
    const {name,picture,Price,Duration}= service
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {Price}</h4>
            <h5>Course Duration: {Duration}</h5>
            <button>More Details</button>
        </div>
    );
};

export default Service;