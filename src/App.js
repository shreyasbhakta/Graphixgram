import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import CategoriesL from './components/CategoriesL';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg5.jpg'})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
  },

}));
export default function App(){
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline/>
    <Header />
    <CategoriesL />
  </div>
}