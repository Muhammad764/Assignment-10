import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'

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
        
        createUserWithEmailAndPassword(name,email,password)
        
    }

    const navigateRegister = event => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <h2 className='mt-3'>Please Register</h2>
            <div className='w-25 mx-auto mt-5'>
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='w-100 mb-5' variant="primary" type="submit">
    Submit
  </Button>
   </Form>
      <p>Already have an account? <Link to="/login" className='fw-bold text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;