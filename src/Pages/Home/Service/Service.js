import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, picture, Price, Duration,Description } = service
    const navigate = useNavigate()
    const handleDetail = id => {
navigate(`/service/${id}`)
    }
    return (
        <div className='service '>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5><span className='text-muted'>Price:</span> {Price}</h5>
            <h5><span className='text-muted'>Duration:</span> {Duration}</h5>
            <p><span className='fw-bold text-muted'>Description:</span> {Description}</p>
            <button onClick={()=>handleDetail(id)} className='my-3 btn btn-dark'>More Details</button>
        </div>
    );
};

export default Service;