import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div style={{height :"1000px"}} className='w-100 justify-content-center align-item-center mt-5'>
            <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
               <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                 <Spinner animation="grow" variant="info" />
                   <Spinner animation="grow" variant="light" />
                      <Spinner animation="grow" variant="dark" />
            </div>
        </div>
    );
};

export default Loading;