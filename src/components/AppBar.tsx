import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import useStyles from './style'
import Home from './menu/Home';
import Login from './menu/Login';
import { getStarlink } from '../services/starlink';

export default function AppBar(props): React.ReactElement {
  const classes = useStyles()

  React.useEffect(() => {
    getStarlink()
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} color="inherit" variant="h6" component="div" >
              {props.name}
            </Typography>
            <Home {...props} />
            <Box sx={{ flexGrow: 1 }} />
            <Login {...props} />
          </Toolbar>
        </MuiAppBar>
      </Box>
    </React.Fragment>
  );
}