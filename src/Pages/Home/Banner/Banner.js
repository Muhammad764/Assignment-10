import React from 'react';
import picture from "../../../1-Martin-Bailey1.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div className='container' >
            <div className='row description-container'>
                <div className='col-12 col-md-6 description ps-5 pt-3'>
                <h2><span className='text-info'>Hi im Martin Bailey from tokyo</span><span className='text-muted'>,</span> <span className='text-warning'>Japan</span> </h2>
                    <p >In this website help you to get learn more about  photography <br /> we will provide lot's of photography services <br /> you will Enjoy it</p>
                    <button className='btn btn-dark px-4 py-2 mt-3 me-3'>Explore More</button>
                </div>
                <div className='col-8 col-md-6 ps-5'>
                      <img src={picture} alt="" />
                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;