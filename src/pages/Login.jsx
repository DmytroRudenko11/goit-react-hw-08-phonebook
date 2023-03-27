import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchLogin } from 'redux/auth/authOperations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleChangeInput = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
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
      email,
      password,
    };
    dispatch(fetchLogin(user)).then(() => navigation('/contacts'));
    reset();
  };

  function reset() {
    setEmail('');
    setPassword('');
  }

  return (
    <Section>
      <Title>Login</Title>
      <LoginForm onSubmit={handleSubmit}>
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
            type="text"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </Label>
        <SubmitBtn>Login</SubmitBtn>
      </LoginForm>
      <RedirectLink to="/registration">Don't have account?</RedirectLink>
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

const LoginForm = styled.form`
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
