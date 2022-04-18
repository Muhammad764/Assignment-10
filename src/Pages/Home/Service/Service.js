import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, picture, Price, Duration } = service
    const navigate = useNavigate()
    const handleDetail = id => {
navigate(`/service/${id}`)
    }
    return (
        <div className='service '>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {Price}</h4>
            <h5>Course Duration: {Duration}</h5>
            <button onClick={()=>handleDetail(id)} className='my-3 btn btn-dark'>More Details</button>
        </div>
    );
};

export default Service;