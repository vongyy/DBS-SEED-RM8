import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";

const drawerWidth = "250px";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const Layout = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <div className={classes.grow}>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' noWrap className={classes.title}>
              TT8
            </Typography>
            <IconButton
              edge='end'
              className={classes.leftSideButton}
              aria-label='email'
              color='inherit'>
              <EmailIcon />
            </IconButton>
            <IconButton
              edge='end'
              className={classes.leftSideButton}
              aria-label='notification'
              color='inherit'>
              <NotificationsIcon />
            </IconButton>
            <IconButton
              edge='end'
              className={classes.leftSideButton}
              aria-label='account'
              color='inherit'>
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Layout;