import React,{useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
  
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    

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
  
  const resetPassword = async () => {
     const email = emailRef.current.value
     await sendPasswordResetEmail(email);
          alert('Sent email');
  }


    
    return (
        <div style={{width :"450px"}} className='shadow  mx-auto mb-5 mt-2 rounded'>
            <h2 className='text-primary my-3'>Please Login</h2>
            <div className='w-75 mx-auto mt-5'>
                  <Form onSubmit={handleSubmit}>
 <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
  <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  
  <Button className='w-100 mb-5 py-2' variant="primary" type="submit">
    Login
  </Button>
</Form>
        
          <p>Dont have an account? <Link to="/register" className='fw-bold text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

           <p>Forgat password? <Link to="/login" className='fw-bold text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password </Link></p>
          
          <SocialLogin></SocialLogin>
      </div>
        </div>
    );
};

export default Login;