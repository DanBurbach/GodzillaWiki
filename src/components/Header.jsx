import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Header() {
  return (
    <div>
      <Grid container>
        <Grid item xs>
          <Link to="/">Godzilla Home</Link> |
          </Grid>
          <Grid item xs>
            <Link to="/newticket">Create Ticket</Link>
          </Grid>

        </Grid>
        <hr/>
      </div>
    );
  }

  export default Header;
