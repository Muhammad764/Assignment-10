import React,{useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
            console.log(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }


    
    return (
        <div>
            <h2 className='mt-4'>Please Login</h2>
            <div className='w-25 mx-auto mt-5'>
                  <Form onSubmit={handleSubmit}>
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
      <p>Dont have an account? <Link to="/register" className='fw-bold text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            </div>
        </div>
    );
};

export default Login;