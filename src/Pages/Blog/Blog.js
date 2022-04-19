import React from 'react';

const Blog = () => {
    return (
        <div style={{margin :"80px"}}>
            <p className='text-primary h5'>1 Difference between authorization and authentication

            </p>
            <p >Ans: Simply put authentication is the process of verifying who someone is whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
            <p className='text-primary h5 mt-5'>2 Why are you using firebase? What other options do you have to implement authentication?</p>
            <p className='mb-5'>Ans: Because Firebase makes verifying process make easier.They have to made some customization which we have to use our website and make our website dynamic and simple our works . <br/>
            There are other authentication we have to implement in our website which one is react firebase hook.Which one is more easier to the firebase and make easy our works. 
            </p>
        </div>
    );
};

export default Blog;