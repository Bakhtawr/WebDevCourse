import React, {useState} from 'react'
import { Container, Grid, Paper, Typography, Tab,Tabs} from '@mui/material';
import { ReactBasic } from './ReactBasic';
import PropsComponentExample from './PropsComponentExample';
import ReactEvents from './ReactEvents';
import ConditionalRendering from './ConditionalRendering';
import Renderinglist from './Renderinglist';
import Routers from './Routers';
import HooksReact from './HooksReact';

const ComponentExample = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <div>
    <Container>
    <Paper elevation={3} style={{ padding: 16, marginTop: 20, textAlign: 'center' }}> 
      <Typography variant="h6" gutterBottom>
          <h1 style={{color: '#0F1C46'}}>3DFOLIO Web Dev</h1> 
          <code>Coding dreams into reality – where innovation meets dedication</code>
          <p></p>
          </Typography>   
          <p>React is a JavaScript library for building user interfaces.</p>
      </Paper>
      
      {/* First Row */}
      <Grid container spacing={3} style={{ padding: 16 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16, boxShadow : 'none' }}>
          <Typography variant="h6" gutterBottom>
           Topics
          </Typography>
          <Paper>           
          </Paper>
      <p></p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16, boxShadow : 'none' }}>
            <Typography variant="h6" gutterBottom>            
            </Typography>
         <Typography>             
            </Typography>
          </Paper>
        </Grid>
      </Grid>
  </Container>
      
  <Grid container spacing={3} style={{ padding: 16 }}>
        <Grid item lg={3} md={3} sm={12} >
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab label="What is React and Example " onClick={toggleDrawer(true)} />
        <Tab label="Props in React" onClick={toggleDrawer(true)} />
        <Tab label="Events in React" onClick={toggleDrawer(true)} />
        <Tab label="React Conditional Rendering" onClick={toggleDrawer(true)} />
        <Tab label="Rendering List" onClick={toggleDrawer(true)} />
        <Tab label="React Routers" onClick={toggleDrawer(true)} />
        <Tab label="React Hooks" onClick={toggleDrawer(true)} />
        </Tabs>
        </Grid>
        <Grid item lg={9} md={9} sm={12}>
      {/* Add content corresponding to the selected tab */}
      {value === 0 && <div><ReactBasic /></div>}
      {value === 1 && <div><PropsComponentExample /></div>}
      {value === 2 && <div><ReactEvents /></div>}
      {value === 3 && <div><ConditionalRendering /></div>}
      {value === 4 && <div><Renderinglist /></div>}
      {value === 5 && <div><Routers/></div>}
      {value === 6 && <div><HooksReact/></div>}  
      </Grid>
  </Grid>
  </div>
  )
}

export default ComponentExample
