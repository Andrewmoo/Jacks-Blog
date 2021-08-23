import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Tabs, Button } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { useAuth0 } from '@auth0/auth0-react';
import PenIcon from "@material-ui/icons/Create";
import Logout from "@material-ui/icons/ExitToApp";
import Login from "@material-ui/icons/AssignmentInd";
import img1 from "../../assets/images/Jack's Blog.svg"
import '../../styles/NavStyles.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    top: "50%"
  },
  logo: {
    height: 100
  }
});



const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  

  const handleOpen = () => {
    setOpen(true);
  };



const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid alignItems="center" justify={"space-between"} container>
            <Grid xs={6} item>
              <a href="https://jacks-blog-frontend.herokuapp.com/"><img
                className={classes.logo}
                src={
                  img1
                }
                alt="Jack's Logo"
              /></a>
            </Grid>
            <Grid xs={2} item>
              <Grid container justify={"center"}>
                <div className="middleNav">
                  <ul>
                    <li><a className href="/">Posts</a></li>
                    <li><a className href="/">About</a></li>
                    <li><a className href="/">Contact</a></li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={2}>
            {!isAuthenticated && <Button
              color="primary"
              variant="outlined"
              startIcon={<Login />}
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Button> }
            {isAuthenticated && <div><Button
              color="primary"
              variant="outlined"
              startIcon={<PenIcon />}
              onClick={handleOpen}
            >
              Create post
            </Button> <Button
              color="secondary"
              variant="outlined"
              startIcon={<Logout />}
              onClick={() => logout()}
            >
              Log Out
            </Button></div> }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Header;
