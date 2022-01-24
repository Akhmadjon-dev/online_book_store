import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './styles/StySignUp';
import img from '../../assets/imgSignUp.png';
import Input from '../../components/Input';
import Button from '../../components/Button';





function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  console.log(formData);

  const { firstName, lastName, email, password, phone, address } = formData;
  return <Container>
      <div className="container__img">
        <img src={img} alt="left description"/>
      </div>
      <form className="form">
        <h1 className="form__title">
          Sign Up
        </h1>
        <p className="form__subtitle">
          Already have an account? <Link to="/login">Sign In</Link> 
        </p>
        <div className="form__group">
          <Input name="firstName" label="First Name" type="text" value={firstName} placeholder="First Name" onChange={inputHandler} />
          <Input name="lastName" label="Last Name" type="text" value={lastName} placeholder="Last Name" onChange={inputHandler} />
          <Input name="phone" label="Enter phone" type="tel" value={phone} placeholder="Enter phone" onChange={inputHandler} />
          <Input name="address" label="Enter address" type="text" value={address} placeholder="Enter address" onChange={inputHandler} />
          <Input name="email" label="Enter email" type="email" value={email} placeholder="Enter email" onChange={inputHandler} />
          <Input name="password" label="Enter password" type="password" value={password} placeholder="Enter password" onChange={inputHandler} />
          <Button title="Next step" type={'submit'} />
        </div>
      </form>
  </Container>;
}

export default SignUp;
