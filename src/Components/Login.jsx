import { Typography, Button, TextField, Box } from '@mui/material';
import { useContext, useState } from 'react';
import { loginRequest } from '../Api/api';

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../Contexts/UserContext';

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [userdata, setuserdata] = useState({ username: "", password: "" });

  const handlechange = (e) => {
    setuserdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handlelogin = async () => {

  if (userdata.username === "aqdar@hotmail.com" && userdata.password === "1234") {
    login("fake-token-123"); 
    navigate("/home");
  } else {
    setError("Login Failed");
  }
};
//


  return (
    <Box sx={{ width: { xs: "90%", sm: "70%", md: 400, lg: 500, xl: 600 }, mx: "auto", mt: { xs: 3, md: 5 }, border: "1px solid #fff", borderRadius: { xs: 1, md: 2 } }}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <form onSubmit={(e) => { e.preventDefault(); handlelogin(); }}>
        <TextField name="username" value={userdata.username} fullWidth label="Email" type="email" margin='normal' onChange={handlechange} />
        <TextField name="password" value={userdata.password} fullWidth label="Password" type="password" margin='normal' onChange={handlechange} />
        <Button type="submit" variant='contained' color='primary' fullWidth sx={{ mt: 2 }}>Login</Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </Box>
  );
}
