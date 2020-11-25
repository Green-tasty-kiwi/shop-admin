import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import { Link } from "react-router-dom";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({


  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listItem: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px'
  },

}));


export function Sidebar({ isOpen, handleDrawerOpen, handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link className={classes.listItem} to="/products"> <ListItem button><ListItemIcon><FormatListBulletedSharpIcon /></ListItemIcon>Products</ListItem></Link>
        <Link className={classes.listItem} to="/orders"> <ListItem button><ListItemIcon><AddShoppingCartIcon /></ListItemIcon>Orders</ListItem></Link>
        <Link className={classes.listItem} to="/customers"> <ListItem button><ListItemIcon><PeopleAltIcon /></ListItemIcon>Customers</ListItem></Link>
      </List>
      <Divider />
    </Drawer>
  )
}