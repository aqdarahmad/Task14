import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import api from "../../Api/Api";
import { UserContext } from "../../App";


export default function Login() {
    const { setuserinfo } = useContext(UserContext)

    const [userdata, setuserdata] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setuserdata(prev => ({ ...prev, [e.target.name]: e.target.value }))



    }

    const handlelogin = async (e) => {
        e.preventDefault();

        const res = await api.post("/login", {
            username: userdata.username,
            password: userdata.password
        });
        localStorage.setItem("token", res.token);
        setuserinfo(res.userinfo);

    };


    return (
        <Box
            sx={{
                width: {
                    xs: "90%",
                    sm: "70%",
                    md: 400,
                    lg: 500,
                    xl: 600
                },
                mx: "auto",
                mt: { xs: 3, md: 5 },
                p: { xs: 2, md: 3 },
                border: "1px solid #ccc",
                borderRadius: { xs: 1, md: 2 }
            }}
        >

            <Typography variant="h5" mb={2}>
                Login
            </Typography>
            <form>
                <TextField fullWidth label="Email" type="email" margin="normal" name="username" value={userdata.username} onChange={handleChange} />
                <TextField fullWidth label="Password" type="password" margin="normal" name="password" value={userdata.password} onChange={handleChange} />
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handlelogin} >
                    Login
                </Button>
            </form>
        </Box>
    );
}
