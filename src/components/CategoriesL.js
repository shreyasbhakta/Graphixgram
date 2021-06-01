import React from 'react';
import {makeStyles} from '@material-ui/core';
import DesignL from './DesignL';
import categories from '../static/categorys';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles= makeStyles((theme)=>({
    root:{
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        
    },
}));

export default function CategoriesL() {
    const classes = useStyles();
    const checked =useWindowPosition('header');
    return (
        <div className={classes.root} id="categoriesl">
            <DesignL category={categories[0]} checked={checked} />
            <DesignL category={categories[1]} checked={checked}  />
        </div>
    )
}
