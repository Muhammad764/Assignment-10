import React,{useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/"
  
  const [
  signInWithEmailAndPassword,
  user
  ] = useSignInWithEmailAndPassword(auth);
  
  if (user) {
    navigate(from, { replace: true });
  }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        signInWithEmailAndPassword(email,password)
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
          
          <SocialLogin></SocialLogin>
      </div>
        </div>
    );
};

export default Login;