import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';      
import Slide from '@mui/material/Slide';
import logo from '../../assets/logo.svg'; 
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

/*Hide AppBar on scrolling*/
function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,

  window: PropTypes.func,
};

/* Tabs navigation for the app bar */

export default function Header(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    }
    const [anchorEl, setAnchorEl] = useState(null);
    useEffect =()=>{
        switch (window.location.pathname) {
            case '/':
                setValue(0);
                break;
            case '/service':
                setValue(1);
                break;
            case '/revolution':
                setValue(2);
                break;
            case '/about':
                setValue(3);
                break;
            case '/contact':
                setValue(4);
                break;
            default:
                break;
        }
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters>
                    <img alt="company logo" src={logo} style={{
                            height: '7em'
                        }} />
                    <Tabs 
                        value ={value} onChange={handleChange} sx={{marginLeft:'auto'}}  indicatorColor="primary"
                        textColor="inherit"
                        >
                            <Tab component={Link} to='/' label="home"/>
                            <Tab component={Link} to='/service' label="Service"/>
                            <Tab component={Link} to='/revolution' label="The revolution"/>
                            <Tab component={Link} to='/about' label="About us"/>
                            <Tab component={Link} to='/contact' label="Contact us"/>
                    </Tabs>
                    <Button variant='contained' color='secondary' >Free Estimate</Button>
                </Toolbar>
            </AppBar>

        
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
    
  );
}
