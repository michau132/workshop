import React, { Component } from 'react';
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Drawer, withStyles, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MenuRounded, ChevronLeft, InboxOutlined } from "@material-ui/icons";

import routes from '../routes';
import './App.scss';
import getCurrentRoute from '../utils/getCurrentRoute';
import AppService from '../context/AppContext';

const drawerWidth = 300;

const CustomDrawer = withStyles(theme => ({
  paper: {
    width: drawerWidth,
    boxShadow: theme.shadows[8],
  },
}))(Drawer);

const CustomAppBar = withStyles((theme) => {
  // console.log(theme);
  return {
    root: {
      transition: theme.transitions.create([ 'width', 'margin', ], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  };
})(AppBar);

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: true,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
 
  toggleDrawer() {
    this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen, }));
  }
  render(){
    const { drawerOpen, } = this.state;
    const { title, } = getCurrentRoute(this.props.location);
    return (
      <div className="app">
        <AppService>
          <CustomAppBar 
            position="static"
            className={drawerOpen ? 'drawerOpen': ''}
          >
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer}>
                <MenuRounded />
              </IconButton>
              <Typography variant="h6" >
                {title}
              </Typography>
            </Toolbar>
          </CustomAppBar>
          <CustomDrawer
            variant="persistent"
            anchor="left"
            open={drawerOpen}
          >
            <div className='iconClose'>
              <IconButton onClick={this.toggleDrawer} data-test='icon-button'>
                <ChevronLeft /> 
              </IconButton>
            </div>
            <Divider />
            <List>
              {routes
                .filter(el => !el.path.includes(':'))
                .map((route, index) => (
                  <Link to={route.path} key={index}>
                    <ListItem button>
                      <ListItemIcon>
                        <InboxOutlined />
                      </ListItemIcon>
                      <ListItemText>{route.title}</ListItemText>
                    </ListItem>
                  </Link>
                ))}
            </List>
          </CustomDrawer>
          <div className={`${drawerOpen ? 'drawerOpen': ''} mainContent`} >
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} exact component={route.component} />
              ))}
            </Switch>
          </div>
        </AppService>
      </div>
    );
  }
}
export default withRouter(App);