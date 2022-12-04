import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import{useNavigate} from "react-router-dom";
import axios from "axios";



const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const[fromData,setFormData]= useState({
    email:"",
    password:"",
    confirmPassword:""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fromData)
     // eslint-disable-next-line no-undef, no-unused-vars
     const response = await axios.post("https://web2-1pnz.onrender.com/register/signup",{
      ...fromData,
    });
    navigate("/signin");
 
  };


 return (
  
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={fromData.email}
              onChange={(e)=>
              setFormData({...fromData,email:e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password shoud be  8 characters"
              type="password"
               value={fromData.password}
              onChange={(e)=>
              setFormData({...fromData,password:e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="confirmPassword shoud be  8 characters"
              type="password"
               value={fromData.confirmPassword}
              onChange={(e)=>
              setFormData({...fromData,confirmPassword:e.target.value})}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"I already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}