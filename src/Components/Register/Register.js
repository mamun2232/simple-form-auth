import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.init';
import './Register.css'
const auth = getAuth(app);
const Register = () => {
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
    createUserWithEmailAndPassword(auth , email , passward)
    .then(result=>{
      console.log(result.user);
      emailVarify()
    })
    .catch(error =>{
      console.log(error);
    })

    event.preventDefault()
  }
  const emailVarify = () =>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
       console.log('massage send');
    })
    .catch(error =>{
      console.log(error);
    })
  }

      return (
            <div>
                   <div>
                 <div className="from-container">
      <div className="from w-50 mx-auto mt-5 border p-3">
        <h4 className='text-center'>PLease Register!</h4>

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
  
 
 <input className='btn btn-primary w-100 rounded' type="submit" value="Register Now" />
 <Link className='btn btn-outline-primary px-5 my-3' to="/">Back</Link>
 
</Form>
      </div>
    </div> 
            </div> 
            </div>
      );
};

export default Register;