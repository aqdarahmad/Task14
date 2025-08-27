
import { Typography, Button, TextField, Box } from '@mui/material'
export default function Login() {
    return (
        <>

            <Box sx={{ width: { xs: "90%", sm: "70%", md: 400, lg: 500, xl: 600 }, mx: "auto", mt: { xs: 3, md: 5 }, border: "1px solid #fff", borderRadius: { xs: 1, md: 2 } }}>

                <Typography variant="h5" mb={2}>
                    Login
                </Typography>
                <form>
                    <TextField name="username" fullWidth label="Email" type="email" margin='normal' size='' />
                    <TextField name="password" fullWidth label="Password" type="password" margin='normal' />
                    <Button variant='contained' color='primary' fullWidth sx={{ mt: 2, mr: 2 }} >Login </Button>
                </form>
            </Box>

        </>
    )
}
