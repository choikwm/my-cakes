import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { common } from "@mui/material/colors";

import companyLogo from "../images/companyLogo/companyLogoSquare.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate, Link } from "react-router-dom";

const HeaderBar = () => {
  // const pages = ["About Us", "Products", "Promotions", "Blog", "Contact Us"];
  const pages = [
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Products",
      link: "/products",
    },

    {
      name: "Promotions",
      link: "/promotions",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
    {
      name: "Shopping Cart",
      link: "/shoppingcart",
    },
  ];
  const settings = ["Sign Up", "Sign In"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  // View Cart Drawer Function
  const [isViewCartOpen, setIsViewCartOpen] = useState(false);

  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsViewCartOpen(state);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Shopping Cart"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Your items"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#99505c",
          //d9bac2
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            maxWidth: "lg",
          }}
        >
          <Typography
            sx={{
              color: "#f0dfdf",
              fontSize: "13px",
              mt: "0.8rem",
              mb: "1rem",
              ml: "1rem",
              mr: "1rem",
            }}
          >
            Limited Offer: Enjoy $50 off discounts for order above $500 by enter
            "WELCOME50" upon check out!
          </Typography>
        </Container>
      </Box>

      <AppBar position="sticky">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: "1.8rem",
          }}
        >
          <Link to="/">
            <img src={companyLogo} width="150px" height="100px" />
          </Link>
          <></>
          {/* LOGO in FUll VIEW */}
          {/* <Button
            sx={{
              color: common.white,
              size: "large",
              display: { xs: "none", md: "flex" },
              fontSize: "30px",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            myCAKES
          </Button> */}
          <></>
        </Container>
        <></>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.link}
                    onClick={() => {
                      navigate(page.link);
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* <Link to="/">
              <img src={companyLogo} width="150px" height="150px" />
            </Link> */}

            {/* // LOGO in SMALL VIEW */}
            {/* <Button
              sx={{
                // color: common.white,
                // size: "large",
                // fontSize: "20px",
                // ml: "1rem",
                // mr: "2rem",
                // flexGrow: 1,
                // display: { xs: "flex", md: "none" },
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              myCAKES
            </Button> */}

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.link}
                  onClick={() => {
                    navigate(page.link);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            {/* <Box sx={{ flexGrow: 0 }}> */}
            {/* <Container > */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Tooltip title="My Account">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountBoxIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              <Tooltip title="View Shopping Cart">
                <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{ p: 0, ml: "0.5rem", mr: "0.5rem" }}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>

              <Drawer
                anchor="right"
                open={isViewCartOpen}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
              {/* </Container> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default HeaderBar;
