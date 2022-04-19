import React,{useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
  
   const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    

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
    if (email) {
       await sendPasswordResetEmail(email);
          toast('Sent email');
    } else {
      toast('please!Enter your email address')
    }
  }


    
    return (
        <div style={{width :"450px"}} className='shadow  mx-auto mb-5 mt-3 rounded'>
            <h2 className='text-primary my-3 pt-4'>Please Login</h2>
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

          
          <p>Forget password ? <button type="button" class="btn btn-link text-decoration-none" onClick={resetPassword}>Reset Password</button></p>
          
          <SocialLogin></SocialLogin>
          <ToastContainer />
      </div>
        </div>
    );
};

export default Login;