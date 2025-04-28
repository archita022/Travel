import React, {useState, useContext}from 'react';
import {Container, Row, Col, Form, FormGroup, Button} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import "../styles/login.css";
import signupImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import {AuthContext} from "../context/AuthContext";
import {Base_URL} from "../utils/config";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username:undefined,  
    email: undefined,
    contact: undefined,
    password: undefined
})
const {dispatch} = useContext(AuthContext)
const navigate = useNavigate()
const handleChange =e => {
setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
}
const handleClick= async e => {
e.preventDefault()
try{
  const res = await fetch(`${Base_URL}/auth/signup`,{
    method: 'post',
    headers:{ 'content-type':'application/json' },
    body: JSON.stringify(credentials)
  })
  const result = await res.json()
  if(!res.ok) alert(result.message)
  dispatch({type:'SIGNUP_SUCCESS'})
  navigate('/login')
}catch(err){
  alert(err.message)
}
}
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={signupImg} alt="" style={{ width: '400px', height: 'auto' }}/>
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Signup</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type='text' placeholder='Username' required id="username" onChange={handleChange}/><br/><br/>
                  </FormGroup>
                  <FormGroup>
                    <input type='email' placeholder='Email' required id="email" onChange={handleChange}/><br/><br/>
                  </FormGroup>
                  <FormGroup>
                    <input type='text' placeholder='Contact no.' required id="contact" onChange={handleChange}/><br/><br/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id="password" onChange={handleChange}/><br/><br/>
                  </FormGroup>
                  <input type="checkbox" onChange={handleChange} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}/>
                  <p style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}>By sign up you agree to the<a href="/tandc">Terms & conditions</a></p>
                  <Button className='btn-secondary auth__btn' type='submit'>Sign up</Button>
                </Form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
};

export default Signup;