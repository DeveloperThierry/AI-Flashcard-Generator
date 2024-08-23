import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton, SignIn, SignUp } from '@clerk/nextjs';
// import { SignIn, SignUp } from '@clerk/nextjs';

import Link from 'next/link'

export default function SignUpPage() {
 return(
   <Container maxWidth="false" style={{  margin: 0, padding: 0 }}>
     <AppBar position="static" sx={{backgroundColor: 'primary'}}>
       <Toolbar>
         <Typography variant="h6" sx={{flexGrow: 1}}>
           LearnScape AI
         </Typography>
         <Button color="inherit">
          <Link href="/sign-up" passHref style={{ textDecoration: 'none', color: 'white' }}>
            SignUp
          </Link>
        </Button>
         <Button color="inherit">
           <Link href="/sign-in" passHref style={{ textDecoration: 'none', color: 'white' }}>
             Login
           </Link>
         </Button>
       </Toolbar>
     </AppBar>
     <Box
       display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       sx={{textAlign: 'center', my: 4}}
     >
       <Typography variant="h4" component="h1" gutterBottom>
         Sign In
       </Typography>
       <SignUp />
     </Box>
   </Container>
 )
}