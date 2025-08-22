import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Second_Page from '../Pages/Second-Page';
import First_Page from '../Pages/Fisrt-Page'
import Login from '../Components/LogIn/Login';
import { UserContext } from '../App';
import { useContext } from 'react';

export default function AppRouting() {
  const { userinfo } = useContext(UserContext);
   return (
    <Routes>
      <Route path="/login" element={!userinfo ? <Login /> : <Navigate to="/" />} />
      <Route path="/" element={userinfo ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<First_Page />} />
        <Route path="saved" element={<Second_Page />} />
      </Route>
    </Routes>
  );

}


