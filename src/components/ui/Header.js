import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import logo from "../../assets/logo.svg";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import menuItemClasses from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /*const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };*/

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setOpenMenu(false);
    setValue(1);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const menuOptions = [
    { name: "Custom Software Development", link: "/services/customSoctware" },
    { name: "Mobile App Development", link: "/services/mobileapps" },
    { name: "Website Development", link: "/services/website" },
  ];
  useEffect(() => {
    const handlePathChange = (path) => {
      switch (path) {
        case "/":
          if (value !== 0) setValue(0);
          break;
        case "/services":
          if (value !== 1) {
            setValue(1);
            setSelectedIndex(0);
          }
          break;
        case "/services/customSoctware":
          if (value !== 1) {
            setValue(1);
            setSelectedIndex(1);
          }
          break;
        case "/services/mobileapps":
          if (value !== 1) {
            setValue(1);
            setSelectedIndex(2);
          }
          break;
        case "/services/website":
          if (value !== 1) {
            setValue(1);
            setSelectedIndex(3);
          }
          break;
        case "/revolution":
          if (value !== 2) setValue(2);
          break;
        case "/about":
          if (value !== 3) setValue(3);
          break;
        case "/contact":
          if (value !== 4) setValue(4);
          break;
        default:
          break;
      }
    };
    handlePathChange(window.location.pathname);
  }, [value]);
  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ marginLeft: "auto" }}
        indicatorColor="primary"
        textColor="inherit"
      >
        <Tab component={Link} to="/" label="home" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onClick={(e) => handleClick(e)}
          aria-controls="simple-menu"
          label="Service"
        />
        <Tab component={Link} to="/revolution" label="The revolution" />
        <Tab component={Link} to="/about" label="About us" />
        <Tab component={Link} to="/contact" label="Contact us" />
      </Tabs>
      <Button variant="contained" color="secondary">
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            component={Link}
            to={option.link}
            onClick={(e) => handleMenuItemClick(e, index)}
            key={option.name}
            selected={index === selectedIndex}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        Example Drawer
      </SwipeableDrawer>
      <IconButton
        sx={{
          marginLeft: "auto",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        className="drawerIconContainer"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        disableRipple
      >
        <MenuIcon
          sx={{
            height: "50px",
            width: "50px",
          }}
        />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              className="logoButton"
              onClick={() => setValue(0)}
            >
              <img alt="company logo" src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
