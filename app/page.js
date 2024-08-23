"use client";

import { useUser, ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Image from 'next/image'



export default function Home() {
  return (
    <Container maxWidth="false" style={{  margin: 0, padding: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            LearnScape AI
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
            <Button color="inherit" href="/sign-in">Login</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
     <Box
      sx={{ textAlign: 'center', my: 4, padding: 16 }}
    >
      <Typography variant="h2">Welcome to LearnScape AI</Typography>
      <Typography variant="h5">Create flashcards from your text in a snap! 🎉</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} href='/generate'>Get Started</Button>
    </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" style={{ marginBottom: '40px' }}>
        
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
            Just type in your text, and watch the magic happen! We’ll take care of the rest! 🎉
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Smart flashcards Text Input</Typography>
            <Typography>
            Our brilliant AI transforms your text into exciting, bite-sized flashcards that are unforgettable! 📚✨
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
            Whether you're on the move or relaxing at home, access your content anytime, anywhere! 🚀🛋️
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{my: '6', textAlign: 'center'}}>
        <Typography variant="h4" component="h2" style={{ marginBottom: '40px' }}>
          Pricing/Tiers
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: '10px',
                margin: '1rem',
                height: '200px',
              }}
              >
            <Typography variant="h5">Bronze</Typography>
            <Typography variant="h6">Free</Typography>
            <Button variant="contained" color="grey" sx={{ mt: 2 }}>
              {' '}
              Limited Features
            </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: '10px',
                margin: '1rem',
                height: '200px',
              }}
              >
            <Typography variant="h5">Silver</Typography>
            <Typography variant="h6">$5 /Month</Typography>
            <Button variant="contained" color="grey" sx={{ mt: 2 }}>
              {' '}
              Premium Features
            </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: '10px',
                margin: '1rem',
                height: '200px',
              }}
              >
            <Typography variant="h5">Gold</Typography>
            <Typography variant="h6">$10/Month</Typography>
            <Button variant="contained" color="grey" sx={{ mt: 2 }}>
              {' '}
              Legacy Features/Added Perks
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  )
}
