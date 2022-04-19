import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2 className='mt-5'>Welcome to Detail:{serviceId}</h2>
            <div className='my-5'>
            <Link to='/checkout'>
                <button className='btn btn-dark'>Proceed Checkout</button>
             </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;