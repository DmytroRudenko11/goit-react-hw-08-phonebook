import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from './hoc/PrivateRoute';
import { PublicRoute } from './hoc/PublicRoute';
import { Layout } from './Layout/Layout';
import { Registation } from 'pages/Registation';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Home } from 'pages/Home';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registation />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route path="*" elemen={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}
