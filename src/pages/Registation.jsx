import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchRegister } from 'redux/auth/authOperations';

export const Registation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
      case 'email':
        setEmail(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };
    dispatch(fetchRegister(user)).then(() => navigation('/contacts'));
    reset();
  };

  function reset() {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Section>
      <Title>Registration</Title>
      <SignUpForm onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </Label>
        <SubmitBtn>Create Account</SubmitBtn>
      </SignUpForm>
      <RedirectLink to="/">Do you have account already?</RedirectLink>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  padding: 15px;
  padding-top: 65px;
`;

const Title = styled.h2`
  text-align: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15xp;
`;

const Label = styled.label`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

const Input = styled.input`
  background: #f1f1f1;
  width: 400px;
  padding: 12px 20px;
  margin: 8px auto;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover,
  :focus {
    background-color: #ddd;
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  display: block;
  width: 441px;
  margin: 0 auto;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const RedirectLink = styled(NavLink)`
  display: inline-block;
  text-align: center;
`;
