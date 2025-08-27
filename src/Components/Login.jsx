import { Typography, Button, TextField, Box } from '@mui/material'
import { useContext, useState } from 'react'
import api from '../Api/api'
import { UserContext } from '../Contexts/userContext';

export default function Login() {

    const {setuserInfo} = useContext(UserContext);
    const [userdata, setuserdata] = useState({
        username:" ",
        password :" "
    }
    );
    const handlechange = (e) =>{
    setuserdata((prev => ({...prev , [e.target.name]: e.target.value})))

    }
    const handlelogin = async () =>{
        api.get("/login").then((res)=> {
            localStorage.setItem("token" , res.token)
            setuserInfo(res.userinfo)
        })
    }
    return (
        <>
        <Box sx={{ width: { xs: "90%", sm: "70%", md: 400, lg: 500, xl: 600 }, mx: "auto", mt: { xs: 3, md: 5 }, border: "1px solid #fff", borderRadius: { xs: 1, md: 2 } }}>
               <Typography variant="h5" mb={2}>Login </Typography>
                <form>
                    <TextField name="username" value={userdata.username} fullWidth label="Email" type="email" margin='normal' onChange={handlechange} />
                    <TextField name="password" value={userdata.password} fullWidth label="Password" type="password" margin='normal' onChange={handlechange} />
                    <Button variant='contained' color='primary' fullWidth sx={{ mt: 2, mr: 2 }} onClick={handlelogin} >Login </Button>
                </form>
            </Box>

        </>
    )
}
