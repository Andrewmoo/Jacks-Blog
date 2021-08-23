import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/post";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuBook";
import PenIcon from "@material-ui/icons/Create";
import Logout from "@material-ui/icons/ExitToApp";
import Login from "@material-ui/icons/AssignmentInd";
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
import PostDetails from "./components/PostDetails";
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import './styles/NavStyles.css';
import img1 from './assets/images/book.svg'
import Header from "./components/Header/Header";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {
  const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  const NavStyles = styled.div`

`;
const LogoStyle = styled.a`

`;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header />
        
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/posts" component={PostsList} />
                <Route exact path="/posts/:id" component={PostDetails} />
              </Switch>
              <Redirect from="/" to="/posts" />
            </Router>
          </Grid>
        </Grid>

        <AddPostForm open={open} handleClose={handleClose} />
      </Container>
    </>
  );
};

export default App;
