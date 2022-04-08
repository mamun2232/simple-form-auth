import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const Login = () => {
  const [email, setEmail] = useState('')
  const [passward , setPassward] = useState('')
  //  callet user email 
  const emailHendeler = e =>{
    setEmail(e.target.value);
  }
  // callet user passward 
  const PasswordHendeler = e =>{
    setPassward(e.target.value);

  }
  // submit from hundeler 
  const submitFrom = event =>{
    signInWithEmailAndPassword(auth , email , passward)
    .then(result=>{
      console.log(result.user);
    
    })
    .catch(error =>{
      console.log(error);
    })

    event.preventDefault()
  }

//  for gatepss 
  const forgatePassward = () =>{
    sendPasswordResetEmail(auth, email)
    .then(result =>{
      console.log('password send');
    })
    .catch(error =>{
      console.log(error);
    })
  }
 
// sin in with google 
const googleSingIn = () =>{
signInWithPopup(auth , googleProvider)
.then(result =>{
  console.log(result.user);
  console.log('click google button');
})
.catch(error =>{
  console.log(error);
})
}

      return (
            <div>
                 <div className="from-container">
      <div className="from w-50 mx-auto mt-5 border p-3">
        <h4 className='text-center'>Log In</h4>
      <Form onSubmit={submitFrom}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={emailHendeler} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={PasswordHendeler} type="password" placeholder="Password" />
  </Form.Group>
  
 
 <input className='btn btn-primary w-100 rounded' type="submit" value="Log In" />
 <p onClick={forgatePassward} className='text-primary my-2 text-right'>Forgate Passward</p>

<h6 className='my-4 text-center'>Not a member? <Link className='link' to='/register'><span className='text-info'>Register Now</span></Link></h6>

<button onClick={googleSingIn} className='d-flex w-100 bg-light p-2 border'>
  <div className="icon ms-2">
    <FcGoogle></FcGoogle>
  </div>
  <div className="text ms-4">
    Sing In With Google
  </div>
</button>
</Form>
      </div>
    </div> 
            </div>
      );
};

export default Login;