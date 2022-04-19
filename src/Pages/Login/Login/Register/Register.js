import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
  createUserWithEmailAndPassword,
  user
  ] = useCreateUserWithEmailAndPassword(auth);
  
  
    
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        createUserWithEmailAndPassword(email,password)
        
    }

    const navigateRegister = event => {
        navigate('/login')
  }
  

    if (user) {
        navigate('/home')
   }
  

    return (
        <div style={{width :"450px"}} className='shadow  mx-auto mb-5 mt-2 rounded'>
            <h2 className='mt-3 text-primary pt-3'>Please Register</h2>
            <div className='w-75 mx-auto mt-4'>
                  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicText">

    <Form.Control ref={nameRef} type="text" placeholder="Your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
  <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  
  <Button className='w-100 mb-5' variant="primary" type="submit">
    Register
  </Button>
   </Form>
          <p>Already have an account? <Link to="/login" className='fw-bold text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Login</Link></p>
         
          
          <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;