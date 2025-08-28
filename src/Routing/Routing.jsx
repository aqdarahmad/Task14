import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Home from '../Pages/Home';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

export default function Routing() {
  const { token } = useContext(UserContext);

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />

        </>
      )}
    </Routes>
  );
}
