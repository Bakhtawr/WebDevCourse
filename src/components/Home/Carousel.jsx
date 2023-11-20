
import React from 'react'
import { Grid, Paper, Typography, Button, Stack } from '@mui/material';
import ComponentExample from './ComponentExample';
import TYpescriptlogo from '../assets/Typescript_logo.png'
import NextJS from '../assets/nextjslogo.png'
import Vuelogo from '../assets/vuelogo.png'




const Carousel = () => {
  return (
     <div>
      <Grid container >
        <Grid lg={3} xs={6} md={3} sm={6}>
        <Stack direction='row' spacing={10} justifyContent='center' style={{paddingTop : 50}}>
        <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' width='140' height='120' alt='Home Banner' />   
         </Stack>
        </Grid>
        <Grid lg={3} xs={6} md={3} sm={6}>
        <Stack direction='row' spacing={10} justifyContent='center' style={{paddingTop : 50}}>
        <img  src={TYpescriptlogo} width='140' height='120' alt='TypeScript Logo' />
         </Stack>
        </Grid>
        <Grid lg={3} xs={6} md={3} sm={6}>
        <Stack direction='row' spacing={10} justifyContent='center' style={{paddingTop : 50}}>
        <img  src={NextJS} width='140' height='120' alt='Next JS' />
         </Stack>
        </Grid>
        <Grid lg={3} xs={6} md={3} sm={6}>
        <Stack direction='row' spacing={10} justifyContent='center' style={{paddingTop : 50}}>
        <img  src={Vuelogo} width='140' height='120' alt='VUE JS' />
         </Stack>
        </Grid>
      </Grid>

        <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{  textAlign: 'center', boxShadow : 'none',  marginTop: 100 , marginBottom: 100, xs : {marginTop: 50 , marginBottom: 50}}}>
          <Typography variant="h5" gutterBottom>
          <h1 style={{color: '#0F1C46'}}>The Library For Web user Interfaces</h1> 
          </Typography>       
          <Stack direction='row' spacing={2} justifyContent='center'>
                 <Button variant="contained" href="#contained-buttons" sx={{background : '#0F1C46', '&:hover' : {background : '#fff', color: '#0F1C46'}}}>Learn React</Button>
                 <Button variant="contained" href="#contained-buttons" sx={{background : '#0F1C46', '&:hover' : {background : '#fff', color: '#0F1C46'}}}>  API Reference </Button>
                 </Stack> 
        </Paper>
      </Grid>
      <ComponentExample />
        </div>
     
  )
}

export default Carousel
