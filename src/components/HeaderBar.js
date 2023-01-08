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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import companyLogo from "../images/companyLogo/Logo1.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate, Link } from "react-router-dom";
import { Stack } from "@mui/material";

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
      name: "Contact Us",
      link: "/contactus",
    },
    {
      name: "Cart",
      link: "/viewcart",
    },
    {
      name: "Checkout",
      link: "/checkout",
    },
    {
      name: "Payment",
      link: "/payment",
    },
  ];
  const viewAccount = [
    {
      name: "Sign Up",
      link: "/signup",
    },

    {
      name: "Login",
      link: "/login",
    },
  ];

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
          backgroundColor: "#a7c3cf",
          // color: "#99505c",
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
              color: "#ffffff",
              fontSize: "13px",
              mt: "0.8rem",
              mb: "1rem",
              ml: "1rem",
              mr: "1rem",
            }}
          >
            Enjoy 10% OFF of your first order by enter "WELCOME10" coupon code
            upon check out!
          </Typography>
        </Container>
      </Box>

      <AppBar position="sticky">
        {/* Container for MD view */}
        <Container
          maxWidth="lg"
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: "1rem",
          }}
        >
          <Link to="/">
            <img
              src={companyLogo}
              alt="Company Logo"
              width="150px"
              height="80px"
            />
          </Link>
        </Container>
        <></>

        <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.link}
                onClick={() => {
                  navigate(page.link);
                }}
                sx={{ color: "white", display: "block" }}
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
              sx={{ display: { xs: "none", md: "flex" } }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Below for the sign up and login button */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Tooltip title="My Account">
              <IconButton onClick={handleOpenUserMenu}>
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
              {viewAccount.map((viewAccount) => (
                <Button
                  key={viewAccount.link}
                  onClick={() => {
                    navigate(viewAccount.link);
                  }}
                  sx={{ display: "block" }}
                >
                  {viewAccount.name}
                </Button>
              ))}
            </Menu>

            <Tooltip title="View Shopping Cart">
              <IconButton
                onClick={() => {
                  navigate("/viewcart");
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>

        {/* Container for XS view */}

        <Toolbar
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <img
              src={companyLogo}
              alt="Company Logo"
              width="120px"
              height="60px"
            />
          </Link>
          <Stack direction="row">
            <IconButton
              size="large"
              aria-label="My Account"
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
              sx={{ display: { xs: "block", md: "none" } }}
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

            <PopupState variant="popover" popupId="demoPopover">
              {(popupState) => (
                <>
                  <Tooltip title="Search...">
                    <IconButton {...bindTrigger(popupState)}>
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <TextField
                      label="Search for?"
                      sx={{ maxHeight: 50, maxWidth: 150 }}
                    ></TextField>
                  </Popover>
                </>
              )}
            </PopupState>

            <Tooltip title="My Account">
              <IconButton onClick={handleOpenUserMenu}>
                <AccountBoxIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="View Shopping Cart">
              <IconButton
                onClick={() => {
                  navigate("/viewcart");
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderBar;
