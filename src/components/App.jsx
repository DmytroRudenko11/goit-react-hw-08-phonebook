import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from './Layout/Layout';
import { Registation } from 'pages/Registation';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/registration" element={<Registation />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" elemen={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}
