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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const currentPath = location.pathname;
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
  const [openListItemButton, setOpenListItemButton] = useState(true);

  /* style  */
  const selectedDrawerItemStyle = {
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.dark,
      color: "#fff",
    },
    "&.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  };
  const drawerStyle = {
    top: 64,
    height: "calc(100% - 64px)",
  };
  /** render for button */
  const renderDrawerButton = (to, label) => (
    <ListItemButton
      className="drawerItem"
      component={Link}
      to={to}
      selected={currentPath === to}
      onClick={() => setIsDrawerOpen(false)}
      sx={selectedDrawerItemStyle}
      divider
    >
      <ListItemText disableTypography>{label}</ListItemText>
    </ListItemButton>
  );
  const renderDrawerButtonFreeEstimate = (to, label) => (
    <ListItemButton
      className="drawerItem free-estimate"
      component={Link}
      to={to}
      selected={currentPath === to}
      onClick={() => setIsDrawerOpen(false)}
      sx={selectedDrawerItemStyle}
      divider
    >
      <ListItemText disableTypography>{label}</ListItemText>
    </ListItemButton>
  );
  /*handler  */
  //listItemButotn
  const handleListItemButton = () => {
    setOpenListItemButton(!openListItemButton);
  };
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

  //menuItme
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

  const listItmeOptions = [
    { name: "Custom Software Development", link: "/services/customSoftware" },
    { name: "Mobile App Development", link: "/services/mobileapps" },
    { name: "Website Development", link: "/services/website" },
  ];
  const routeToTab = {
    "/": 0,
    "/services": 1,
    "/services/customSoftware": 1,
    "/services/mobileapps": 1,
    "/services/website": 1,
    "/revolution": 2,
    "/about": 3,
    "/contact": 4,
  };

  useEffect(() => {
    const tabIndex = routeToTab[currentPath];
    if (tabIndex !== undefined && value !== tabIndex) {
      setValue(tabIndex);
    }
  }, [currentPath, value]);

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
      <Button
        className="free-estimate"
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
      >
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
            onClick={(e) => {
              handleMenuItemClick(e, index);
              setOpenListItemButton(!openListItemButton);
            }}
            key={option.name}
            selected={currentPath === option.link}
            sx={{
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
              },
              "&.Mui-selected:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
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
        className="drawer"
        sx={{
          "& .MuiDrawer-paper": {
            top: matches ? 118 : 118,
            height: matches ? "calc(100% - 118px)" : "calc(100% - 118px)",
          },
        }}
      >
        <List onClose={handleClose} component="nav" disablePadding>
          {renderDrawerButton("/", "Home")}
          <ListItemButton
            aria-controls="services-collapse"
            className="drawerItem"
            divider
            onClick={handleListItemButton}
          >
            <ListItemText disableTypography>Services</ListItemText>
            {openListItemButton ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            id="service-collapse"
            in={!openListItemButton}
            timeout="auto"
            unmountOnExit
          >
            {listItmeOptions.map((option, index) => (
              <ListItemButton
                key={option.name || option.link}
                component={Link}
                to={option.link}
                selected={currentPath === option.link}
                sx={selectedDrawerItemStyle}
                onClick={() => {
                  setIsDrawerOpen(false);
                  setOpenListItemButton(!openListItemButton);
                }}
              >
                {option.name}
              </ListItemButton>
            ))}
          </Collapse>
          {renderDrawerButton("/revolution", "The Revolution")}
          {renderDrawerButton("/about", "About Us")}
          {renderDrawerButton("/contact", "Contact Us")}
          {renderDrawerButtonFreeEstimate("/estimate", "Free Estimate")}
        </List>
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
    </React.Fragment>
  );
}
