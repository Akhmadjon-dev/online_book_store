import React, { useState,  } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from './styles/StySignUp';
import img from '../../assets/imgSignUp.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { authLoginIn } from '../../features/auth/authSlice';




function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const user = useSelector(state => state);

  console.log(user, 'user login');

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authLoginIn(formData));
    console.log(formData);
  }

  console.log(formData);

  const { email, password } = formData;

  return <Container>
      <div className="container__img">
        <img src={img} alt="left description"/>
      </div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">
          Sign In
        </h1>
        <p className="form__subtitle">
          Don't you have an account? <Link to="/sign-up">Sign Up</Link> 
        </p>
        <div className="form__group">
          <Input name="email" label="Enter email" type="email" value={email} placeholder="Enter email" onChange={inputHandler} />
          <Input name="password" label="Enter password" type="password" value={password} placeholder="Enter password" onChange={inputHandler} />
          <Button title="Next step" type={'submit'} />
        </div>
      </form>
  </Container>;
}

export default Login;
